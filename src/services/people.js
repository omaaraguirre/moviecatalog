import { reqOptions, LANGUAGE } from '../config/config'
import { showErrorToast } from '../config/toast'

export const fetchPeople = async () => {
  try {
    const [popular, trending] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/person/popular?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/trending/person/week?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const people = {
      popular: popular.results,
      trending: trending.results
    }
    return people
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}

export const fetchPersonById = async id => {
  try {
    const [info, movies, tvshows] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/person/${id}?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/person/${id}/tv_credits?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const person = {
      ...info,
      movies,
      tvshows
    }
    return person
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}
