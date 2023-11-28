import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fontsource-variable/orbitron'
import '@fontsource-variable/comfortaa'
import MediaProvider from './context/MediaProvider'
import Layout from './layout/Layout'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Shows from './pages/Shows'
import ShowDetails from './pages/ShowDetails'
import People from './pages/People'
import PeopleDetails from './pages/PeopleDetails'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MediaProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='movies'>
                <Route index element={<Movies />} />
                <Route path=':id' element={<MovieDetails />} />
              </Route>
              <Route path='tvshows'>
                <Route index element={<Shows />} />
                <Route path=':id' element={<ShowDetails />} />
              </Route>
              <Route path='people'>
                <Route index element={<People />} />
                <Route path=':id' element={<PeopleDetails />} />
              </Route>
              <Route path='search'>
                <Route index element={<Search />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </MediaProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
