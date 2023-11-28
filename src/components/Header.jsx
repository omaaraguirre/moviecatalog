import { IconArrowBackUp } from '@tabler/icons-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { navLinks } from '../config/config'
import Navigation from './Navigation'

const Header = () => {
  const [isMainPage, setIsMainPage] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const mainPages = navLinks.map(link => link.path)

  useEffect(() => {
    location.pathname === '/' && navigate('/movies')
    setIsMainPage(mainPages.includes(location.pathname))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location, navigate])

  return (
    <header className='contenedor flex flex-col gap-5 z-10'>
      <div className='grid place-items-center relative'>
        <button
          type='button'
          title='Go back'
          className={`absolute left-2 p-2 rounded-lg backdrop-blur-lg text-lighter hover:bg-primary/50 box-shadow transition-all duration-300 ${isMainPage && 'opacity-0 pointer-events-none'}`}
          onClick={() => navigate(-1)}
        >
          <IconArrowBackUp className='w-5 h-5' />
        </button>
        <Link to='/' className='font-orbitron font-bold text-3xl text-shadow text-light hover:text-primary transition-colors duration-300'>
          MediaHub
        </Link>
      </div>
      <Navigation isMainPage={isMainPage} />
    </header>
  )
}

export default Header
