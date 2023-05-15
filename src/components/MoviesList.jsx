import PropTypes from 'prop-types'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
  return (
    <section className='w-full flex flex-wrap justify-center gap-5'>
      {movies && movies.map(movie =>
        movie !== null && <Movie key={movie.id} movie={movie} />
      )}
    </section>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
