import { IconSquareRoundedChevronsUpFilled } from '@tabler/icons-react'

const Footer = () =>
  <footer className='relative flex flex-col gap-2 py-5 mt-10 text-sm text-center text-light/70 font-comforta'>
    <p>
      MediaHub &copy; {new Date().getFullYear()} All rights reserved
    </p>
    <p>
      Made with ❤️ by <a href='https://github.com/omaaraguirre' target='_blank' rel='noopener noreferrer' className=' border-b border-transparent hover:border-lighter hover:text-lighter transition-colors duration-500'>Omar Aguirre</a>
    </p>
    <button
      type='button'
      title='Back to Top'
      className='absolute top-1/2 right-5 -translate-y-1/2 z-30 text-secondary hover:scale-125 transition-transform duration-300'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <IconSquareRoundedChevronsUpFilled className='w-8 h-8' />
    </button>
  </footer>

export default Footer
