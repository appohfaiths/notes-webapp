import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PreviewCardProps } from './types'
import { ConvertUnixTimeToDate } from '../../utils/utils'

export const PreviewCard: React.FC<PreviewCardProps> = ({ title, body, created_at }) => {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator('/view')
    }
  return (
      <article className='rounded-2xl shadow-lg flex flex-col w-72 bg-secondary-white text-secondary-black cursor-pointer' onClick={handleClick}>
          <h3 className='text-center'>{title}</h3>
          <p className='pl-2 border-t-2 border-b-2'>{body}</p>
          <p className='pl-2'>created: {ConvertUnixTimeToDate(created_at)}</p>
    </article>
  )
}
