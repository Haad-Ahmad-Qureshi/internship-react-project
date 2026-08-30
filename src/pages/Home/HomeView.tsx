import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useHomeViewModel } from './useHomeViewModel'

import './HomeView.css'

export function HomeView() {
  const {
    movies,
    loading,
    error,
    handleFavourite,
  } = useHomeViewModel()

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