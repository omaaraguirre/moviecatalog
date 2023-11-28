import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { MediaContext } from '../context/MediaProvider'
import { fetchPeople, fetchPersonById } from '../services/people'
import useMovies from './useMovies'
import useShows from './useShows'

const usePeople = () => {
  const { person, setPerson, people, setPeople } = useContext(MediaContext)
  const { mapMovies } = useMovies()
  const { mapShows } = useShows()

  const getPeople = async () => {
    const people = await fetchPeople()
    setPeople({
      popular: mapPeople(people.popular),
      trending: mapPeople(people.trending)
    })
  }
  const debouncedGetPeople = useCallback(
    debounce(() => getPeople(), 500), []
  )

  const getPersonById = async id => {
    const person = await fetchPersonById(id)
    setPerson(mapPerson(person))
  }
  const debouncedGetPersonById = useCallback(
    debounce(id => getPersonById(id), 500), []
  )

  const mapPeople = peopleArray => {
    const mappedPeople = peopleArray
      .filter(person => person.profile_path)
      .map(person => {
        return {
          id: person.id,
          name: person.name,
          original_name: person.original_name,
          profile_path: `https://image.tmdb.org/t/p/w185${person.profile_path}`
        }
      })
    if (mappedPeople.length % 2 !== 0) mappedPeople.pop()
    return mappedPeople
  }

  const mapPerson = person => {
    return {
      id: person.id,
      name: person.name,
      birthday: person.birthday,
      deathday: person.deathday,
      bornIn: person.place_of_birth,
      biography: person.biography,
      backdrop: `https://image.tmdb.org/t/p/original${person.profile_path}`,
      movies: {
        cast: mapMovies(person.movies.cast),
        crew: mapMovies(person.movies.crew)
      },
      tvshows: {
        cast: mapShows(person.tvshows.cast),
        crew: mapShows(person.tvshows.crew)
      }
    }
  }

  return {
    person,
    setPerson,
    getPersonById: debouncedGetPersonById,
    people,
    setPeople,
    getPeople: debouncedGetPeople,
    mapPeople
  }
}

export default usePeople
