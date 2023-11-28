import { createContext, useState, useRef } from 'react'

export const MediaContext = createContext()

const MediaProvider = ({ children }) => {
  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState([])
  const [show, setShow] = useState([])
  const [shows, setShows] = useState([])
  const [person, setPerson] = useState({})
  const [people, setPeople] = useState([])
  const [searchResults, setSearchResults] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const prevSearch = useRef(searchValue)

  return (
    <MediaContext.Provider value={{
      movie,
      setMovie,
      movies,
      setMovies,
      show,
      setShow,
      shows,
      setShows,
      person,
      setPerson,
      people,
      setPeople,
      searchResults,
      setSearchResults,
      searchValue,
      setSearchValue,
      prevSearch
    }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export default MediaProvider
