import { NavLink } from 'react-router-dom'
import { navLinks } from '../config/config'

const Navigation = ({ isMainPage }) =>
  <nav className={`flex justify-around items-center p-2 font-comforta text-lg transition-all duration-300 ${!isMainPage && 'opacity-0 pointer-events-none'}`}>
    {
      navLinks.map(({ label, path }) =>
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => isActive ? 'text-lighter' : 'text-medium' + ' hover:text-light transition-colors duration-300'}
        >
          {label}
        </NavLink>
      )
    }
  </nav>

export default Navigation
