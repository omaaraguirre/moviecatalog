import { useEffect } from 'react'
import usePeople from '../hooks/usePeople'
import ItemsSlider from '../components/ItemsSlider'

const People = () => {
  const { people, setPeople, getPeople } = usePeople()

  useEffect(() => {
    getPeople()
    // return () => setPeople([])
  }, [])

  return (
    <main className='flex flex-col gap-10'>
      <ItemsSlider items={people.popular} label='Popular People' section='people' />
      <ItemsSlider items={people.trending} label='Trending People' section='people' />
    </main>
  )
}

export default People
