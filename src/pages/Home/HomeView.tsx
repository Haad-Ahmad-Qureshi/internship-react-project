import { useNavigate } from 'react-router-dom'

import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useAuth } from '../../context/AuthContext'
import { useHomeViewModel } from './useHomeViewModel'
import { useFavouritesViewModel } from '../Favourites/useFavouritesViewModel'

import './HomeView.css'

export function HomeView() {
  const { movies, loading, error } = useHomeViewModel()
  const { saveMovie } = useFavouritesViewModel()

  const { user } = useAuth()
  const navigate = useNavigate()

  function handleFavourite(movie: typeof movies[number]) {
    if (!user) {
      navigate('/favourites')
      return
    }

    void saveMovie(movie)
  }

  return (
    <main>
      {loading && <p>Loading movies...</p>}
      {error && <p role="alert">{error}</p>}

      <ul className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavourite={handleFavourite}
          />
        ))}
      </ul>
    </main>
  )
}

export default HomeView