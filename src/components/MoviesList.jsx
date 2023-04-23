import PropTypes from 'prop-types'
import ImagenPelicula from './ImagenPelícula'

const MoviesList = ({ movies }) => {
  return (
    <section className='w-full grid gap-5 place-items-center' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {movies && movies.map(({ id, title, year, poster, plot, type }) =>
        <div
          key={id}
          className='text-white flex gap-5 w-full md:max-w-5xl max-w-lg shadow-md shadow-gray-800 rounded-md p-3'
        >
          <ImagenPelicula url={poster} title={title} type={type} />
          <div className='flex-1'>
            <h2 className='mb-1 leading-none font-bold text-lg md:text-base'>{title}</h2>
            <p className='mb-4'>{year}</p>
            <p className='line-clamp-5'>{plot !== 'N/A' ? plot : ""}</p>
          </div>
        </div>
      )}
    </section>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
