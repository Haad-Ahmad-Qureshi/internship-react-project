import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './Header'
import HomeView from './pages/Home/HomeView'
import FavouritesView from './pages/Favourites/FavouritesView'
import AuthView from './pages/Auth/AuthView'

import { useAuth } from './context/AuthContext'

function App() {
  const { user, authLoading } = useAuth()

  if (authLoading) {
    return <p>Loading authentication...</p>
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />

        <Route
          path="/auth"
          element={user ? <Navigate to="/" replace /> : <AuthView />}
        />

        <Route
          path="/favourites"
          element={
            user ? <FavouritesView /> : <Navigate to="/auth" replace />
          }
        />
      </Routes>
    </>
  )
}

export default App