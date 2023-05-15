import PropTypes from 'prop-types'

const ImagenPelicula = ({ movie }) => {
  const { poster, title } = movie

  return (
    <div className='relative'>
      {
        poster === 'N/A'
          ? <div className='bg-gray-800 h-80 w-56 grid place-items-center'>
            <span className='material-icons text-5xl'>image_not_supported</span>
          </div>
          : <img
              src={poster}
              alt={title}
              className='h-80 w-56'
            />
      }
    </div>
  )
}

ImagenPelicula.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
}

export default ImagenPelicula
