import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../layouts/Layout'
import { CTA, BackToHome } from '../components';
import { ConvertUnixTimeToDate } from '../utils/utils';

export default function View(): React.JSX.Element {
    const {state} = useLocation();
    const { title, body, created_at, updated_at } = state;
    return (
        <Layout>
            <main className='container mx-auto'>
                <BackToHome />
                <h1 className='text-2xl text-red-500'>View Note</h1>
                <CTA type='view' title={title} />
                <p>last updated: { updated_at == 0 ? ConvertUnixTimeToDate(created_at): ConvertUnixTimeToDate(updated_at)}</p>
                <p>{body}</p>
            </main>
        </Layout>
  )
}
