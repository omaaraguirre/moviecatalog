import useSearch from '../hooks/useSearch'
import ItemsSlider from './ItemsSlider'

const SearchResults = () => {
  const { searchResults } = useSearch()

  return (
    <>
      {
        searchResults.movies?.length > 0 &&
          <ItemsSlider
            items={searchResults.movies}
            label='Movies'
            section='movies'
          />
      }
      {
        searchResults.shows?.length > 0 &&
          <ItemsSlider
            items={searchResults.shows}
            label='TV Shows'
            section='tvshows'
          />
      }
      {
        searchResults.people?.length > 0 &&
          <ItemsSlider
            items={searchResults.people}
            label='People'
            section='people'
          />
      }
    </>
  )
}

export default SearchResults
