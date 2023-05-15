import { useEffect, useState } from 'react'
import ImagenPelicula from './ImagenPelícula'
import InfoPelicula from './InfoPelicula'
import { addInfo } from '../hooks/useMovies'

const Movie = ({ movie }) => {
  const [movieInfo, setMovieInfo] = useState({})
  const [isHover, setIsHover] = useState(false)
  const typeColor = {
    movie: 'bg-cyan-300',
    series: 'bg-yellow-300',
    episode: 'bg-green-300',
    game: 'bg-purple-300'
  }

  useEffect(() => {
    if (isHover) {
      const fetchData = async () => setMovieInfo(await addInfo(movie))
      fetchData()
    }
  }, [isHover])

  return (
    <div
      key={movie.id}
      className='relative h-80 w-56 overflow-hidden cursor-pointer'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ImagenPelicula movie={movie} />

      <div className='absolute z-50 top-0 bottom-0 w-full bg-black/80 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-500'>
        {movieInfo && <InfoPelicula movieInfo={movieInfo} />}
      </div>

      <span className={`absolute top-2 right-1 text-black uppercase text-xs font-bold py-1 px-2 rounded-xl ${typeColor[movie.type]}`}>
        {movie.type}
      </span>
    </div>
  )
}

export default Movie
