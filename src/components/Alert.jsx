import PropTypes from 'prop-types'

const Alert = ({ error, setError }) => {
  return (
    <div className='p-4 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 text-red-800'>
      <div className='p-2 rounded-xl bg-white'>
        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
        </svg>
      </div>
      <p className='px-2 text-sm'>{error}</p>
      <button
        type='button'
        className='pl-2 border-l-2 border-pink-300'
        onClick={() => setError(false)}
      >
        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </button>
    </div>
  )
}

Alert.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func
}

export default Alert
