import type { Movie } from '../../services/omdbMovieService'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
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

        <button type="button">
          Favourite
        </button>
      </div>
    </article>
  )
}

export default MovieCard