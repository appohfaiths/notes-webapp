import React from 'react'
import { PreviewCard } from '..'
import { NotesDisplayProps } from './types'

export const NotesDisplay: React.FC<NotesDisplayProps> = ({notes}) => {
  return (
      <section className='border-2 border-primary-blue p-8 rounded-2xl grid grid-cols-3'>
            {notes.map(note => <PreviewCard key={note.note_id} title={note.title} body={note.body} created_at={note.created_at} />)}
    </section>
  )
}
