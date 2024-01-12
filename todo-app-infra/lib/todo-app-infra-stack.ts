import * as cdk from 'aws-cdk-lib';
import * as ddb from 'aws-cdk-lib/aws-dynamodb'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class TodoAppInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create dynamodb table to store tasks
    const table = new ddb.Table(this, 'Notes', {
      partitionKey: { name: 'note_id', type: ddb.AttributeType.STRING },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: 'ttl',
    });

    // add global secondary index based on user_id
    table.addGlobalSecondaryIndex({
      indexName: 'user-index',
      partitionKey: { name: 'user_id', type: ddb.AttributeType.STRING },
      sortKey: { name: 'created_time', type: ddb.AttributeType.NUMBER },
    });

    // create lambda function for the api
    const api = new lambda.Function(this, 'API', {
      runtime: lambda.Runtime.PYTHON_3_11,
      code: lambda.Code.fromAsset('../api/lambda_function.zip'),
      handler: 'notes.handler',
      architecture: lambda.Architecture.X86_64,
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // create a url to access the function
    const functionUrl = api.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ['*'],
        allowedMethods: [lambda.HttpMethod.ALL],
        allowedHeaders: ['*'],
      }
    });

    // output the api function url
    new cdk.CfnOutput(this, 'APIurl', {
      value: functionUrl.url,
    })

    // give lambda function access to dynamodb table
    table.grantReadWriteData(api);
  }
}
