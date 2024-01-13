import React from 'react'
import Layout from '../layouts/Layout'
import { CTA, NotesDisplay } from '../components'

export default function Home(): React.JSX.Element {

    const testNotes = [
        {
            note_id: "note1",
            user_id: "user1",
            title: 'Test Note',
            body: 'This is a test note',
            created_at: 1705106043
        },
        {
            note_id: "note2",
            user_id: "user1",
            title: 'Test Note 2',
            body: 'This is a test note 2',
            created_at: 1705106043
        },
        {
            note_id: "note3",
            user_id: "user1",
            title: 'Test Note 3',
            body: 'This is a test note 3',
            created_at: 1705177732
        }
    ]
    return (
        <Layout>
            <main className='container mx-auto'>
                <h1 className='text-2xl text-red-500'>Home</h1>
                <CTA type='home' title="What's on your mind?" />
                <NotesDisplay notes={testNotes} />
            </main>
        </Layout>
  )
}
