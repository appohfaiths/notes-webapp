import React from 'react'
import { PreviewCard } from '..'
import { NotesDisplayProps } from './types'

export const NotesDisplay: React.FC<NotesDisplayProps> = ({notes}) => {
  return (
      <section className='border-2 border-primary-blue p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {notes.map(note => <PreviewCard key={note.note_id} title={note.title} body={note.body} created_at={note.created_at} note_id={note.note_id} updated_at={note.updated_at}/>)}
    </section>
  )
}
