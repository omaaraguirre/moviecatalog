import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { MediaContext } from '../context/MediaProvider'
import { fetchMovieById, fetchMovies } from '../services/movies'

const useMovies = () => {
  const { movie, setMovie, movies, setMovies } = useContext(MediaContext)

  const getMovies = async () => {
    const movies = await fetchMovies()
    setMovies({
      popular: mapMovies(movies.popular),
      nowPlaying: mapMovies(movies.nowPlaying),
      topRated: mapMovies(movies.topRated),
      upcoming: mapMovies(movies.upcoming)
    })
  }
  const debouncedGetMovies = useCallback(
    debounce(() => getMovies(), 500), []
  )

  const getMovieById = async id => {
    const movie = await fetchMovieById(id)
    setMovie(mapMovie(movie))
  }
  const debouncedGetMovieById = useCallback(
    debounce(id => getMovieById(id), 500), []
  )

  const mapMovies = moviesArray => {
    const mappedMovies = moviesArray
      .filter(movie => movie.poster_path && movie.backdrop_path)
      .map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          year: movie.release_date.substring(0, 4),
          genres: movie.genre_ids,
          poster: `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        }
      })
    if (mappedMovies.length % 2 !== 0) mappedMovies.pop()
    return mappedMovies
  }

  const mapMovie = movie => {
    return {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      tagline: movie.tagline,
      duration: movie.runtime,
      year: movie.release_date.substring(0, 4),
      genres: movie.genres,
      plot: movie.overview,
      similar: mapMovies(movie.similar),
      videos: movie.videos
        .filter(video => video.type === 'Teaser' || video.type === 'Trailer')
        .map(video => {
          return {
            id: video.id,
            name: video.name,
            type: video.type,
            thumbnail: `https://i.ytimg.com/vi_webp/${video.key}/sddefault.webp`,
            embed: `https://www.youtube-nocookie.com/embed/${video.key}`,
            url: `https://www.youtube.com/watch?v=${video.key}`
          }
        }),
      backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      production: movie.production_companies
        .filter(company => company.logo_path)
        .map(company => {
          return {
            id: company.id,
            name: company.name,
            logo_path: `https://image.tmdb.org/t/p/w154${company.logo_path}`
          }
        }),
      cast: movie.cast
        .filter(cast => cast.profile_path && cast.known_for_department === 'Acting')
        .map(cast => {
          return {
            id: cast.id,
            name: cast.name,
            character: cast.character,
            type: cast.known_for_department,
            profile_path: `https://image.tmdb.org/t/p/w185${cast.profile_path}`
          }
        })
    }
  }

  return {
    movie,
    setMovie,
    getMovieById: debouncedGetMovieById,
    movies,
    setMovies,
    getMovies: debouncedGetMovies,
    mapMovies
  }
}

export default useMovies
