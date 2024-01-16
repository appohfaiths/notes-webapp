import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PreviewCardProps } from './types'
import { ConvertUnixTimeToDate } from '../../utils/utils'

export const PreviewCard: React.FC<PreviewCardProps> = ({ title, body, created_time, note_id, updated_time }) => {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator('/view', { state: { title, body, created_time, note_id, updated_time } })
    }
  return (
      <article className='rounded-2xl shadow-lg flex flex-col w-72 bg-secondary-white text-secondary-black cursor-pointer border-2 border-slate-400' onClick={handleClick}>
          <h3 className='text-center line-clamp-1 overflow-ellipsis overflow-hidden'>{title}</h3>
          <p className='pl-2 border-t-2 border-b-2 line-clamp-2 overflow-ellipsis overflow-hidden'>{body}</p>
          <p className='pl-2'>created: {ConvertUnixTimeToDate(created_time)}</p>
    </article>
  )
}
