import { useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigator = useNavigate()
  return (
      <nav className='w- h-8 bg-primary-blue flex items-center justify-center p-8'>
          <p onClick={() => navigator('/')} className='font-markazi text-secondary-white text-display-title cursor-pointer'>Note Pal</p>
      </nav>
  )
}
