import { useEffect } from 'react'
import useMovies from '../hooks/useMovies'
import ItemsSlider from '../components/ItemsSlider'

const Movies = () => {
  const { movies, setMovies, getMovies } = useMovies()

  useEffect(() => {
    getMovies()
    // return () => setMovies([])
  }, [])

  return (
    <main className='flex flex-col gap-10'>
      <ItemsSlider
        items={movies.popular}
        label='Popular Movies'
        section='movies'
      />
      <ItemsSlider
        items={movies.nowPlaying}
        label='Movies in theatres'
        section='movies'
      />
      <ItemsSlider
        items={movies.topRated}
        label='Top Rated Movies'
        section='movies'
      />
      <ItemsSlider
        items={movies.upcoming}
        label='Upcoming Movies'
        section='movies'
      />
    </main>
  )
}

export default Movies
