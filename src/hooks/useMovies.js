import { useCallback, useMemo, useRef, useState } from 'react'

const API_TOKEN = '4287ad07'
const MOVIE_API = `https://www.omdbapi.com/?apikey=${API_TOKEN}`

const useMovies = ({ searchValue, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(searchValue)

  const getMovies = useCallback(async (searchValue) => {
    setError(null)
    if (searchValue === previousSearch.current) { return }

    if (searchValue === '') { return setMovies([]) }

    try {
      setLoading(true)
      previousSearch.current = searchValue
      const response = await fetch(`${MOVIE_API}&s=${searchValue}`)
      if (!response.ok) { throw new Error('Error fetching movies') }
      const data = await response.json()
      if (!data.Search) { return setMovies([]) }
      mapMovies(data.Search)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const mapMovies = (moviesArray) => {
    const mappedMovies = moviesArray.map((movie) => {
      // if (movie.Poster === 'N/A') return null
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster === 'N/A' ? 'noPoster.png' : movie.Poster,
        type: movie.Type
      }
    })
    setMovies(mappedMovies)
  }

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortMovies, getMovies, loading, error, setError }
}

export const addInfo = async (movie) => {
  const response = await fetch(`${MOVIE_API}&i=${movie.id}`)
  const info = await response.json()
  return {
    id: info.imdbID,
    title: info.Title,
    year: info.Year,
    poster: info.Poster,
    type: info.Type,
    genre: info.Genre,
    director: info.Director,
    writer: info.Writer,
    actors: info.Actors,
    plot: info.Plot
  }
}

export default useMovies
