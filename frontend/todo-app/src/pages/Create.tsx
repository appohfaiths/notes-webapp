import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { CTA, BackToHome, CustomInput } from '../components'
import { addNote, selectIsLoading } from '../redux/features/notes/notesSlice'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import {toast} from 'react-toastify'
import { CustomErrorResponse } from '../types/error'
import { TailSpin } from 'react-loader-spinner'

export default function Create(): React.JSX.Element {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const isLoading = useAppSelector(selectIsLoading)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        if (name === 'title') {
            setTitle(value)
        } else {
            setBody(value)
        }
    }

    const handleSave = () => {
        if (title === '' || body === '')
        toast.error('Please add a title and some text', {
            position: 'top-right',
            autoClose: 3000,
        });
        else {
        dispatch(addNote({
            "title": title,
            "body": body,
            "user_id": "frontend",
            "note_id": "string",
            "created_time": 0,
            "updated_time": 0
        }))
        .then((resultAction) => {
            // Check if the action is fulfilled or rejected
            if (addNote.fulfilled.match(resultAction)) {
            // If the dispatch is successful, show a success toast
            toast.success('Note added successfully!', {
                position: 'top-right',
                autoClose: 2000,
            });
            // Redirect to the home page
            navigator('/');
            } else {
            // If the dispatch fails, show an error toast with the error message
                const error = resultAction.payload as CustomErrorResponse;
                const errorMessage = error.detail;
                toast.error(`Failed to add note: ${errorMessage ? errorMessage : error || 'Something went wrong'}`, {
                position: 'top-right',
                autoClose: 3000,
            });
            }
        });
    }
};


    const titleInput = <CustomInput variant="text" placeholder="note title" name='title' value={title} onChange={handleInputChange}/>

    return (
        <Layout>
            <main className='container mx-auto pb-20'>
                {isLoading && (<div className="fixed inset-0 bg-secondary-black opacity-30 z-50"></div>)}
                {isLoading && <div className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><TailSpin color="blue" radius={2} height={300} strokeWidth={3}/></div>}
                <div className='flex items-center justify-between'>
                    <h1 className='text-4xl font-semibold text-primary-blue p-4'>Create Note</h1>
                    <BackToHome />
                </div>
                <CTA type='create' customInput={titleInput} buttonAction={handleSave}/>
                <section className='mt-8 p-2 rounded-xl border-2 border-primary-blue'>
                    <CustomInput variant={'textarea'} value={body} placeholder='note body' name='body' rows={15} disabled={false} onChange={handleInputChange}/>
                </section>
            </main>
        </Layout>
  )
}
