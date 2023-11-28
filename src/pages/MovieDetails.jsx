import { useEffect, memo } from 'react'
import { useParams } from 'react-router-dom'
import useMovies from '../hooks/useMovies'
import Skeleton from '../components/Skeleton'
import HeroImage from '../components/HeroImage'
import TitleLines from '../components/TitleLines'
import Tags from '../components/Tags'
import Plot from '../components/Plot'
import ProductionCompanies from '../components/ProductionCompanies'
import ItemsSlider from '../components/ItemsSlider'
import VideosSlider from '../components/VideosSlider'

const MovieDetails = () => {
  const { id } = useParams()
  const { movie, setMovie, getMovieById } = useMovies()

  useEffect(() => {
    getMovieById(id)
    return () => setMovie({})
  }, [id])

  if (!movie.id) return <Skeleton />

  const { backdrop, title, tagline, duration, year, genres, plot, production, cast, videos, similar } = movie

  return (
    <main>
      <HeroImage imageUrl={backdrop} />
      <div className='contenedor -mt-36 flex flex-col items-center'>
        <TitleLines title={title} tagline={tagline} />
        <Tags tags={[
          `${duration} mins`,
          year,
          ...genres.map(genre => genre.name)
        ]}
        />
        <Plot plot={plot} />
        <ProductionCompanies companies={production} />
        {cast?.length > 0 && <ItemsSlider label='Cast' items={cast} section='people' />}
        {videos?.length > 0 && <VideosSlider videos={videos} />}
        {similar?.length > 0 && <ItemsSlider label='Similar Movies' items={similar} section='movies' />}
      </div>
    </main>
  )
}

export default memo(MovieDetails)
