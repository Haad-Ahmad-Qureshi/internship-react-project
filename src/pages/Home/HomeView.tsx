import { useHomeViewModel } from './useHomeViewModel'

export function HomeView() {
  const { query, setQuery, movies, loading, error, handleSearch } =
    useHomeViewModel()

  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          void handleSearch()
        }}
      >
        <label htmlFor="movie-search">Search movies</label>
        <input
          id="movie-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

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
