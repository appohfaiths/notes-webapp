import React from 'react'
import Layout from '../layouts/Layout'
import { CTA } from '../components'
import { useNavigate } from 'react-router-dom'

export default function Create(): React.JSX.Element {
    const navigator = useNavigate()

    const handleClick = () => {
        navigator('/')
    }
    
    return (
        <Layout>
            <main className='container mx-auto'>
                <button onClick={handleClick}>Back to Home</button>
                <h1 className='text-2xl text-red-500'>Create Note</h1>
                <CTA type='create' />
            </main>
        </Layout>
  )
}
