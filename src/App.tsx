import { useLocation } from 'react-router-dom'
import Header from './Header'
import HomeView from './pages/Home/HomeView'
import FavouritesView from './pages/Favourites/FavouritesView'

function App() {
  const location = useLocation()

  return (
    <>
      <Header />

      {location.pathname === '/' && <HomeView />}

      {location.pathname === '/favourites' && <FavouritesView />}
    </>
  )
}

export default App