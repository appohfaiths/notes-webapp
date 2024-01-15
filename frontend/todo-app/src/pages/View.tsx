import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../layouts/Layout'
import { CTA, BackToHome } from '../components';
import { ConvertUnixTimeToDate } from '../utils/utils';
import { CustomInput } from '../components';
import { useAppDispatch } from '../redux/app/hooks';
import { deleteNote, updateNote } from '../redux/features/notes/notesSlice';

export default function View(): React.JSX.Element {
    const {state} = useLocation();
    const { updated_time, note_id } = state;
    const [title, setTitle] = useState<string>(state.title)
    const [body, setBody] = useState<string>(state.body)
    const dispatch = useAppDispatch();
    // const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        if (name === 'title') {
            setTitle(value)
        } else {
            setBody(value)
        }
    }

    const handleDelete = () => {
        dispatch(deleteNote(note_id))
    }

    const handleUpdate = () => {
        dispatch(updateNote(
            {
            "title": title,
            "body": body,
            "user_id": "frontend",
            "note_id": note_id,
            "created_time": 0,
            "updated_time": 0
            }
        ))
    }

    const titleInput = <CustomInput variant="text" placeholder="note title" name='title' value={title} onChange={handleInputChange} />

    return (
        <Layout>
            <main className='container mx-auto'>
                <div onClick={handleUpdate}>
                    <BackToHome />
                </div>
                <h1 className='text-2xl text-red-500'>View Note</h1>
                <CTA type='view' customInput={titleInput} buttonAction={handleDelete}/>
                <p>last updated: {ConvertUnixTimeToDate(updated_time)}</p>
                <CustomInput variant={'textarea'} value={body} placeholder='note body' name='body' rows={20} onChange={handleInputChange}/>
            </main>
        </Layout>
  )
}
