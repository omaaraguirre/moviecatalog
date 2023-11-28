import { reqOptions, LANGUAGE } from '../config/config'
import { showErrorToast } from '../config/toast'

export const fetchMovies = async () => {
  try {
    const [popular, nowPlaying, topRated, upcoming] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/popular?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/now_playing?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/top_rated?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/upcoming?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const movies = {
      popular: popular.results,
      nowPlaying: nowPlaying.results,
      topRated: topRated.results,
      upcoming: upcoming.results
    }
    return movies
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}

export const fetchMovieById = async id => {
  try {
    const [info, videos, similar, credits] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const movie = {
      ...info,
      videos: videos.results,
      similar: similar.results,
      cast: credits.cast
    }
    return movie
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}

export const fetchMovieGenres = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${LANGUAGE}`, reqOptions)
    const data = await response.json()
    return data.genres || []
  } catch (error) {
    showErrorToast(error.message)
    return []
  }
}
