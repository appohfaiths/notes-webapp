import React from 'react'
import Layout from '../layouts/Layout'
import { CTA, BackToHome } from '../components'

export default function Create(): React.JSX.Element {

    return (
        <Layout>
            <main className='container mx-auto'>
                <BackToHome />
                <h1 className='text-2xl text-red-500'>Create Note</h1>
                <CTA type='create' />
            </main>
        </Layout>
  )
}
