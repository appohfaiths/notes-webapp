import React from 'react'
import { PreviewCardProps } from './types'

export const PreviewCard: React.FC<PreviewCardProps> = ({ title, body, created_at}) => {
  return (
      <article className='rounded-2xl shadow-lg flex flex-col'>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>{created_at}</p>
    </article>
  )
}
