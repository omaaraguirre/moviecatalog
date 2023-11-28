import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { MediaContext } from '../context/MediaProvider'
import { fetchShowById, fetchShows } from '../services/shows'

const useShows = () => {
  const { show, setShow, shows, setShows } = useContext(MediaContext)

  const getShows = async () => {
    const shows = await fetchShows()
    setShows({
      popular: mapShows(shows.popular),
      topRated: mapShows(shows.topRated),
      onAir: mapShows(shows.onAir),
      airing: mapShows(shows.airing)
    })
  }
  const debouncedGetShows = useCallback(
    debounce(() => getShows(), 500), []
  )

  const getShowById = async id => {
    const show = await fetchShowById(id)
    setShow(mapShow(show))
  }
  const debouncedGetShowById = useCallback(
    debounce(id => getShowById(id), 500), []
  )

  const mapShows = showsArray => {
    const mappedShows = showsArray
      .filter(show => show.poster_path && show.backdrop_path)
      .map(show => {
        return {
          id: show.id,
          title: show.name,
          original_title: show.original_name,
          year: show.first_air_date?.substring(0, 4),
          genres: show.genre_ids,
          poster: `https://image.tmdb.org/t/p/w342${show.poster_path}`
        }
      })
    if (mappedShows.length % 2 !== 0) mappedShows.pop()
    return mappedShows
  }

  const mapShow = show => {
    return {
      id: show.id,
      title: show.name,
      original_title: show.original_name,
      tagline: show.tagline,
      duration: { seasons: show.number_of_seasons, episodes: show.number_of_episodes },
      year: show.first_air_date.substring(0, 4),
      genres: show.genres,
      plot: show.overview,
      similar: mapShows(show.similar),
      videos: show.videos
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
      backdrop: `https://image.tmdb.org/t/p/original${show.backdrop_path}`,
      production: show.production_companies
        .filter(company => company.logo_path)
        .map(company => {
          return {
            id: company.id,
            name: company.name,
            logo_path: `https://image.tmdb.org/t/p/w154${company.logo_path}`
          }
        }),
      cast: show.cast
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
    show,
    setShow,
    getShowById: debouncedGetShowById,
    shows,
    setShows,
    getShows: debouncedGetShows,
    mapShows
  }
}

export default useShows
