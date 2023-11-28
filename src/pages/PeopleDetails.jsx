import { useEffect, memo } from 'react'
import { useParams } from 'react-router-dom'
import usePeople from '../hooks/usePeople'
import Skeleton from '../components/Skeleton'
import HeroImage from '../components/HeroImage'
import TitleLines from '../components/TitleLines'
import Plot from '../components/Plot'
import ItemsSlider from '../components/ItemsSlider'

const PeopleDetails = () => {
  const { id } = useParams()
  const { person, setPerson, getPersonById } = usePeople()

  useEffect(() => {
    getPersonById(id)
    return () => setPerson({})
  }, [id])

  if (!person.id) return <Skeleton />

  const { name, birthday, deathday, bornIn, biography, backdrop, movies, tvshows } = person

  return (
    <main>
      <HeroImage imageUrl={backdrop} person />
      <div className='contenedor -mt-20 sm:-mt-32 flex flex-col items-center'>
        <TitleLines title={name} />
        <div className='mt-5 flex flex-col justify-center items-center gap-3 flex-wrap text-lighter text-xs sm:text-sm font-comforta text-shadow'>
          {
            birthday &&
              <div className='flex flex-col gap-1 whitespace-nowrap px-3 py-2 rounded-lg bg-secondary/30 backdrop-blur-sm box-shadow'>
                <div className='flex justify-between'>Born: <span>{birthday}</span></div>
                <span>{bornIn}</span>
              </div>
          }
          {deathday && <span className='whitespace-nowrap px-3 py-2 rounded-lg bg-secondary/30 backdrop-blur-sm box-shadow'>Died: {deathday}</span>}
        </div>
        <Plot plot={biography} />
        <ItemsSlider label='Movies' items={movies.cast} section='movies' />
        <ItemsSlider label='TV Shows' items={tvshows.cast} section='tvshows' />
      </div>
    </main>
  )
}

export default memo(PeopleDetails)
