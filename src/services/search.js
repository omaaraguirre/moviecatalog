import { LANGUAGE, reqOptions } from '../config/config'
import { showErrorToast } from '../config/toast'

export const fetchSearch = async query => {
  try {
    const [movies, shows, people] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=${LANGUAGE}&page=1`, reqOptions)
        .then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&language=${LANGUAGE}&page=1`, reqOptions)
        .then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/search/person?query=${query}&language=${LANGUAGE}&page=1`, reqOptions)
        .then(response => response.json())
    ])
    const results = {
      movies: movies.results,
      shows: shows.results,
      people: people.results
    }
    return results
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}
