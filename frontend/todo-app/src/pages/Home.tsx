import React, {useEffect} from 'react'
import Layout from '../layouts/Layout'
import { CTA, NotesDisplay } from '../components'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { selectNotes, selectIsLoading, selectError } from '../redux/features/notes/notesSlice'
import { fetchNotes } from '../redux/features/notes/notesSlice'
import { TailSpin } from 'react-loader-spinner'


export default function Home(): React.JSX.Element {
    const dispatch = useAppDispatch()
    const notes = useAppSelector(selectNotes)
    const isLoading = useAppSelector(selectIsLoading)
    const error = useAppSelector(selectError)

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])

    return (
        <Layout>
            <main className='container mx-auto flex flex-col gap-8'>
                <h1 className='text-4xl font-semibold text-primary-blue pt-8'>Home</h1>
                <CTA type='home' title="What's on your mind?" buttonAction={() => null}/>

                {isLoading ? <div className='mx-auto'><TailSpin color="blue" radius={2} height={300} strokeWidth={3}/></div> : <NotesDisplay notes={notes} />}
                {error && ''}
            </main>
        </Layout>
  )
}
