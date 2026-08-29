import { useLocation } from 'react-router-dom'
import Header from './Header'
import HomeView from './pages/Home/HomeView'

function App() {
  const location = useLocation()

  return (
    <>
      <Header />

      {location.pathname === '/' && <HomeView />}
    </>
  )
}

export default App