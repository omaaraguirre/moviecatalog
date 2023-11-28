import { reqOptions, LANGUAGE } from '../config/config'
import { showErrorToast } from '../config/toast'

export const fetchShows = async () => {
  try {
    const [popular, topRated, onAir, airing] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/tv/popular?language=${LANGUAGE}&page=1`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/top_rated?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/airing_today?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const shows = {
      popular: popular.results,
      topRated: topRated.results,
      onAir: onAir.results,
      airing: airing.results
    }
    return shows
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}

export const fetchShowById = async id => {
  try {
    const [info, videos, similar, credits] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/tv/${id}?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/${id}/similar?language=${LANGUAGE}`, reqOptions).then(response => response.json()),
      fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=${LANGUAGE}`, reqOptions).then(response => response.json())
    ])
    const show = {
      ...info,
      videos: videos.results,
      similar: similar.results,
      cast: credits.cast
    }
    return show
  } catch (error) {
    showErrorToast(error.message)
    return {}
  }
}

export const fetchShowsGenres = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=${LANGUAGE}`, reqOptions)
    const data = await response.json()
    return data.genres || []
  } catch (error) {
    showErrorToast(error.message)
    return []
  }
}
