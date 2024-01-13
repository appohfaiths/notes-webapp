import { useNavigate } from 'react-router-dom'

export const BackToHome = () => {
    const navigator = useNavigate()
    const handleClick = () => {navigator('/')}
  return (
    <button onClick={handleClick}>Back to Home</button>
  )
}
