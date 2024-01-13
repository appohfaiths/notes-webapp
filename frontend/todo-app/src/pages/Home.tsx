import React from 'react'
import Layout from '../layouts/Layout'
import { CTA } from '../components'

export default function Home():React.JSX.Element {
    return (
        <Layout>
            <main className='container mx-auto'>
                <h1 className='text-2xl text-red-500'>Home</h1>
                <CTA type='home' title="What's on your mind?"/>
            </main>
        </Layout>
  )
}
