import debounce from 'just-debounce-it'
import { useContext, useCallback } from 'react'
import { MediaContext } from '../context/MediaProvider'
import { fetchSearch } from '../services/search'
import useMovies from './useMovies'
import useShows from './useShows'
import usePeople from './usePeople'

const useSearch = () => {
  const { searchResults, setSearchResults, searchValue, setSearchValue, prevSearch } = useContext(MediaContext)
  const { mapMovies } = useMovies()
  const { mapShows } = useShows()
  const { mapPeople } = usePeople()

  const search = async query => {
    if (query === prevSearch.current) return
    prevSearch.current = query
    const results = await fetchSearch(query)
    const mappedResults = {
      movies: mapMovies(results.movies),
      shows: mapShows(results.shows),
      people: mapPeople(results.people)
    }
    setSearchResults(mappedResults)
  }
  const debouncedSearch = useCallback(
    debounce(query => search(query), 500), []
  )

  const hasResults = searchResults.movies?.length > 0 || searchResults.shows?.length > 0 || searchResults.people?.length > 0

  return {
    searchResults,
    search: debouncedSearch,
    hasResults,
    searchValue,
    setSearchValue
  }
}

export default useSearch
