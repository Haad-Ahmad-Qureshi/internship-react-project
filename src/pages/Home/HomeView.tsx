import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useHomeViewModel } from './useHomeViewModel'
import { useFavouritesViewModel } from '../Favourites/useFavouritesViewModel'
import './HomeView.css'

export function HomeView() {
  const { movies, loading, error } = useHomeViewModel()
  const { saveMovie } = useFavouritesViewModel()

  return (
    <main>
      {loading && <p>Loading movies...</p>}
      {error && <p role="alert">{error}</p>}

      <ul className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavourite={(movie) => {
              console.log('Favourite clicked:', movie)
              void saveMovie(movie)
            }}
          />
        ))}
      </ul>
    </main>
  )
}

export default HomeView