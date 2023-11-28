import { IconSearch, IconX } from '@tabler/icons-react'
import useSearch from '../hooks/useSearch'

const SearchField = () => {
  const { search, searchValue, setSearchValue } = useSearch()

  const handleChange = e => {
    setSearchValue(e.target.value)
    const query = e.target.value
    search(query)
  }

  return (
    <label
      className='flex items-center px-4 mt-5 mx-auto w-[min(90%,500px)] rounded-lg text-light focus-within:text-lighter bg-lighter/10 backdrop-blur-sm transition-all duration-300 group outline outline-transparent focus-within:outline-primary'
    >
      <input
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={handleChange}
        className='py-2 w-full font-comforta font-bold text-sm bg-transparent outline-none'
      />
      <button
        onClick={() => setSearchValue('')}
        className='p-2 text-tertiary hover:text-primary transition-colors duration-300'
      >
        <span className='sr-only'>Clear search</span>
        <span className='hidden group-focus-within:inline'>
          <IconX className='w-4 h-4 transition-all duration-300' />
        </span>
      </button>
      <IconSearch className='w-5 h-5 group-focus-within:text-primary transition-all duration-300' />
    </label>
  )
}

export default SearchField
