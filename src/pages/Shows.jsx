import { useEffect } from 'react'
import useShows from '../hooks/useShows'
import ItemsSlider from '../components/ItemsSlider'

const Shows = () => {
  const { shows, setShows, getShows } = useShows()

  useEffect(() => {
    getShows()
    // return () => setShows({})
  }, [])

  return (
    <main className='flex flex-col gap-10'>
      <ItemsSlider
        items={shows.popular}
        label='Popular TV Shows'
        section='tvshows'
      />
      <ItemsSlider
        items={shows.topRated}
        label='Top rated TV Shows'
        section='tvshows'
      />
      <ItemsSlider
        items={shows.onAir}
        label='TV shows that air in the next 7 days'
        section='tvshows'
      />
      <ItemsSlider
        items={shows.airing}
        label='Get a list of TV shows airing today'
        section='tvshows'
      />
    </main>
  )
}

export default Shows
