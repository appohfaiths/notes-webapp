import React, {useState} from 'react'
import Layout from '../layouts/Layout'
import { CTA, BackToHome, CustomInput } from '../components'

export default function Create(): React.JSX.Element {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        if (name === 'title') {
            setTitle(value)
        } else {
            setBody(value)
        }
    }

    const handleSave = () => {
        // dispatch action to save to database
        console.log(title + ' plus ' + body)
        setTitle('')
        setBody('')
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
