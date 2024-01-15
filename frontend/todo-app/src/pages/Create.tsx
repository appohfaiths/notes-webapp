import React, {useState} from 'react'
import Layout from '../layouts/Layout'
import { CTA, BackToHome, CustomInput } from '../components'
import { addNote } from '../redux/features/notes/notesSlice'
import { useAppDispatch } from '../redux/app/hooks'

export default function Create(): React.JSX.Element {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        if (name === 'title') {
            setTitle(value)
        } else {
            setBody(value)
        }
    }

    const handleSave = () => {
        dispatch(addNote(
            {
            "title": title,
            "body": body,
            "user_id": "frontend",
            "note_id": "string",
            "created_time": 0,
            "updated_time": 0
            }
        ))
    }

    const titleInput = <CustomInput variant="text" placeholder="note title" name='title' value={title} onChange={handleInputChange}/>

    return (
        <Layout>
            <main className='container mx-auto pb-20'>
                <BackToHome />
                <h1 className='text-2xl text-red-500'>Create Note</h1>
                <CTA type='create' customInput={titleInput} buttonAction={handleSave}/>
                <section className='mt-8 p-2 rounded-xl border-2 border-primary-blue'>
                    <CustomInput variant={'textarea'} value={body} placeholder='note body' name='body' rows={20} disabled={false} onChange={handleInputChange}/>
                </section>
            </main>
        </Layout>
  )
}
