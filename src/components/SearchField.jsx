import PropTypes from 'prop-types'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

const SearchField = ({ sort, setSort, searchValue, setSearchValue, getMovies }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(searchValue)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
    debouncedGetMovies(value)
  }

  const debouncedGetMovies = useCallback(
    debounce(searchValue => {
      getMovies(searchValue)
    }, 500), [getMovies]
  )

  return (
    <form
      className='w-full md:max-w-5xl flex gap-3 text-black bg-white rounded-lg'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full p-2 rounded-md focus:outline-none"
        placeholder='Search movies...'
        value={searchValue}
        onChange={handleChange}
      />
      <div className='flex items-center gap-1'>
        <input
          id="red-checkbox"
          type="checkbox"
          className="w-5 h-5 rounded border-red-600 cursor-pointer"
          onChange={() => { setSort(!sort) }}
          checked={sort}
        />
        <label
          htmlFor="red-checkbox"
          className="text-sm font-bold select-none cursor-pointer  text-blue-600"
        >
          Sort
        </label>
      </div>
      <button
        type='submit'
        className='material-icons text-white p-2 rounded-md bg-blue-600 hover:bg-blue-900 transition-colors duration-300 ease-in-out'
      >
        search
      </button>
    </form>
  )
}

SearchField.propTypes = {
  sort: PropTypes.bool,
  setSort: PropTypes.func,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  getMovies: PropTypes.func
}

export default SearchField
