import type { Movie } from '../../services/omdbMovieService'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
  onFavourite?: (movie: Movie) => void
}

export function MovieCard({
  movie,
  onFavourite,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      <img
        className="movie-card-poster"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />

      <div className="movie-card-content">
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>

        <button
          type="button"
          onClick={() => onFavourite?.(movie)}
        >
          Favourite
        </button>
      </div>
    </article>
  )
}

export default MovieCard