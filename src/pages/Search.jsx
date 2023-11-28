import useSearch from '../hooks/useSearch'
import SearchField from '../components/SearchField'
import SearchResults from '../components/SearchResults'

const Search = () => {
  const { hasResults } = useSearch()

  return (
    <main className='flex flex-col items-center'>
      <SearchField />
      {
        hasResults
          ? <SearchResults />
          : <p className='font-comforta text-medium my-10'>No results...</p>
      }
    </main>
  )
}

export default Search
