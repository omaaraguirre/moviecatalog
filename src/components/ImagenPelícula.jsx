import PropTypes from "prop-types"

const ImagenPelicula = ({ url, title, type }) => {
  let typeColor = 'bg-cyan-300'
  if (type === 'series')
    typeColor = 'bg-yellow-300'
  else if (type === 'episode')
    typeColor = 'bg-green-300'

  return (
    <div className='relative'>
      {
        url === "N/A"
          ? <div className='bg-gray-800 w-40 h-56 grid place-items-center'>
            <span className="material-icons text-5xl">
              image_not_supported
            </span>
          </div>
          : <img
            src={url}
            alt={title}
            className='w-40 h-56'
          />
      }
      <span className={`text-black uppercase text-xs font-bold py-1 px-2 rounded-xl absolute top-2 right-1 ${typeColor}`}>
        {type}
      </span>
    </div>
  )
}

ImagenPelicula.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
}

export default ImagenPelicula



