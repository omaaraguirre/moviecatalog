import { useState } from 'react'
import SearchField from './components/SearchField'
import MoviesList from './components/MoviesList'
import useMovies from './hooks/useMovies'
import Spinner from './components/Spinner'
import Alert from './components/Alert'

function App() {
  const [sort, setSort] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { movies, getMovies, loading, error, setError } = useMovies({ searchValue, sort })

  return (
    <main className='container mx-auto p-5 flex flex-col items-center gap-5 text-white'>
      <h1 className='text-3xl font-bold'>Movie Catalog</h1>
      <SearchField searchValue={searchValue} setSearchValue={setSearchValue} getMovies={getMovies} sort={sort} setSort={setSort} />
      <h3 className='text-2xl'>Results</h3>
      {
        loading
          ? <Spinner />
          : (
            (movies.length === 0 && searchValue !== "")
              ? <p className='text-center'>No results found</p>
              : <MoviesList movies={movies} />
          )
      }
      {error && <Alert error={error} setError={setError} />}
    </main>
  )
}

export default App
