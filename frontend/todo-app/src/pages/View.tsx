import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout'
import { CTA, BackToHome } from '../components';
import { ConvertUnixTimeToDate } from '../utils/utils';
import { CustomInput } from '../components';
import { useAppDispatch } from '../redux/app/hooks';
import { deleteNote, updateNote } from '../redux/features/notes/notesSlice';
import { toast } from 'react-toastify'
import { CustomErrorResponse } from '../types/error';
import ReactModal from 'react-modal'

export default function View(): React.JSX.Element {
    const {state} = useLocation();
    const { created_time, updated_time, note_id } = state;
    const [title, setTitle] = useState<string>(state.title)
    const [body, setBody] = useState<string>(state.body)
    const [originalState, setOriginalState] = useState({ title: state.title, body: state.body });
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
    // Update originalState when the state changes
    setOriginalState({ title: state.title, body: state.body });
    }, [state]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        if (name === 'title') {
            setTitle(value)
        } else {
            setBody(value)
        }
    }

    const openDeleteConfirmationModal = () => {
        setIsModalOpen(true)
    }

    const handleDelete = () => {
        setIsModalOpen(false)
        dispatch(deleteNote(note_id))
        .then((resultAction) => {
        // Check if the action is fulfilled or rejected
        if (deleteNote.fulfilled.match(resultAction)) {
        // If the dispatch is successful, show a success toast
        toast.success('Note deleted successfully!', {
            position: 'top-right',
            autoClose: 2000,
        });
        // Redirect to the home page
        navigator('/');
        } else {
        // If the dispatch fails, show an error toast with the error message
            const error = resultAction.payload as CustomErrorResponse;
            const errorMessage = error.detail;
            toast.error(`Failed to delete note: ${errorMessage ? errorMessage : error || 'Something went wrong'}`, {
            position: 'top-right',
            autoClose: 3000,
            });
            }
        });
    }

    const handleUpdate = () => {
        if (title !== originalState.title || body !== originalState.body)
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
        .then((resultAction) => {
        // Check if the action is fulfilled or rejected
        if (updateNote.fulfilled.match(resultAction)) {
        // If the dispatch is successful, show a success toast
        toast.success('Note updated successfully!', {
            position: 'top-right',
            autoClose: 2000,
        });
        // Redirect to the home page
        navigator('/');
        } else {
        // If the dispatch fails, show an error toast with the error message
            const error = resultAction.payload as CustomErrorResponse;
            const errorMessage = error.detail;
            toast.error(`Failed to update note: ${errorMessage ? errorMessage : error || 'Something went wrong'}`, {
            position: 'top-right',
            autoClose: 3000,
            });
            }
        });
    }

    const titleInput = <CustomInput variant="text" placeholder="note title" name='title' value={title} onChange={handleInputChange} />

    return (
        <Layout>
            <main className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-4xl font-semibold text-primary-blue p-4'>View Note</h1>
                    <div onClick={handleUpdate}>
                    <BackToHome />
                    </div>
                </div>
                <CTA type='view' customInput={titleInput} buttonAction={openDeleteConfirmationModal}/>
                <div className='flex items-center justify-between mt-2 text-neutral-600'>
                    <p>created: {ConvertUnixTimeToDate(created_time)}</p>
                    <p>last updated: {ConvertUnixTimeToDate(updated_time)}</p>
                </div>
                <section className='mt-8 p-2 rounded-xl border-2 border-primary-blue'>
                    <CustomInput variant={'textarea'} value={body} placeholder='note body' name='body' rows={15} onChange={handleInputChange} />
                </section>
                <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={{
              overlay: {backgroundColor: 'rgba(0, 0, 0, 0.7)',}}} className="bg-secondary-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-28 flex flex-col gap-3 items-center justify-center rounded-2xl">
                    <p className='text-2xl'>Are you sure?</p>
                    <div className='flex items-center justify-around w-full'>
                        <button onClick={() => setIsModalOpen(false)} className='text-xl p-2 rounded-xl hover:bg-secondary-black hover:text-secondary-white'>No</button>
                        <button onClick={handleDelete} className='text-red-500 text-xl p-2 rounded-xl hover:bg-primary-red hover:text-secondary-white'>Yes</button>
                    </div>
                </ReactModal>
            </main>
        </Layout>
  )
}
