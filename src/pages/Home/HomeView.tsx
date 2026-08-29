import { useHomeViewModel } from './useHomeViewModel'

export function HomeView() {
  const { movies, loading, error } = useHomeViewModel()

  return (
    <main>
      {loading && <p>Loading movies...</p>}
      {error && <p role="alert">{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default HomeView
