import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export const BackToHome = () => {
    const navigator = useNavigate()
    const handleClick = () => {navigator('/')}
  return (
    <button className='flex gap-2 items-center rounded-lg m-4 p-2 bg-primary-blue text-secondary-white' onClick={handleClick}><FaArrowLeft /> Back to home </button>
  )
}
