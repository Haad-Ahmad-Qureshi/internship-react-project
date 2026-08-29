import Header from './Header'

import { searchMovies } from './services/omdbMovieService'

if (import.meta.env.DEV) {
  ;(window as any).searchMovies = searchMovies
}

function App() {
  return <Header />
}

export default App
