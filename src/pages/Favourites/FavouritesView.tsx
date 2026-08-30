import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useFavouritesViewModel } from './useFavouritesViewModel'

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
        <section>
          {favourites.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard movie={movie} />

              <button
                type="button"
                onClick={() => void removeMovie(movie.imdbID)}
              >
                Remove from Favourites
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  )
}

export default FavouritesView