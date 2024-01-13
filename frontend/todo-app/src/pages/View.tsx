import React from 'react'
import Layout from '../layouts/Layout'
import { Note } from '../types/note'
import { CTA, BackToHome } from '../components';

export default function View( note : Note): React.JSX.Element {
    const { title, body, created_at } = note;
    return (
        <Layout>
            <main className='container mx-auto'>
                <BackToHome />
                <h1 className='text-2xl text-red-500'>View Note</h1>
                <CTA type='view' title={title} />
            </main>
        </Layout>
  )
}
