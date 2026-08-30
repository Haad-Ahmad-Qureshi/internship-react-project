import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useFavouritesViewModel } from './useFavouritesViewModel'
import '../Home/HomeView.css'
import './FavouritesView.css'

export function FavouritesView() {
  const {
    favourites,
    loading,
    error,
    removeMovie,
  } = useFavouritesViewModel()

  return (
    <main>
      <h1>Favourites</h1>

      {loading && <p>Loading favourites...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && favourites.length === 0 && (
        <p>You don't have any favourite movies yet.</p>
      )}

      {!loading && !error && favourites.length > 0 && (
        <ul className="movie-grid">
          {favourites.map((movie) => (
            <li
              key={movie.imdbID}
              className="favourite-item"
            >
              <MovieCard movie={movie} />

              <button
                className="remove-favourite-button"
                type="button"
                onClick={() => void removeMovie(movie.imdbID)}
              >
                Remove from Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default FavouritesView