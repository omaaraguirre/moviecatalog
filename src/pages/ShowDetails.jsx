import { useEffect, memo } from 'react'
import { useParams } from 'react-router-dom'
import useShows from '../hooks/useShows'
import Skeleton from '../components/Skeleton'
import HeroImage from '../components/HeroImage'
import TitleLines from '../components/TitleLines'
import Tags from '../components/Tags'
import Plot from '../components/Plot'
import ProductionCompanies from '../components/ProductionCompanies'
import ItemsSlider from '../components/ItemsSlider'
import VideosSlider from '../components/VideosSlider'

const ShowDetails = () => {
  const { id } = useParams()
  const { show, setShow, getShowById } = useShows()

  useEffect(() => {
    getShowById(id)
    return () => setShow({})
  }, [id, getShowById])

  if (!show.id) return <Skeleton />

  const { backdrop, title, tagline, duration, year, genres, plot, production, cast, videos, similar } = show

  return (
    <main>
      <HeroImage imageUrl={backdrop} />
      <div className='contenedor -mt-36 flex flex-col items-center'>
        <TitleLines title={title} tagline={tagline} />
        <Tags tags={[
          `${duration.seasons} seasons`,
          `${duration.episodes} episodes`,
          year,
          ...genres.map(genre => genre.name)
        ]}
        />
        <Plot plot={plot} />
        <ProductionCompanies companies={production} />
        {cast?.length > 0 && <ItemsSlider label='Cast' items={cast} section='people' />}
        {videos?.length > 0 && <VideosSlider videos={videos} />}
        {similar?.length > 0 && <ItemsSlider label='Similar Shows' items={similar} section='tvshows' />}
      </div>
    </main>
  )
}

export default memo(ShowDetails)
