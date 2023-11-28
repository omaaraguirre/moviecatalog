import { Link } from 'react-router-dom'

const NotFound = () =>
  <main className='contenedor text-center grid place-items-center'>
    <h1 className='my-10 font-orbitron text-7xl font-bold text-tertiary'>404</h1>
    <p className='mb-5 font-comforta text-3xl font-bold text-primary'>Something's missing.</p>
    <p className='text-lg font-light text-medium'>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
    <Link to='/' className='my-10 px-5 py-3 rounded-lg font-medium text-sm text-light bg-primary hover:scale-105 transition-transform duration-300'>Back to Homepage</Link>
  </main>

export default NotFound
