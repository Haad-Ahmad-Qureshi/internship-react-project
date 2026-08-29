import { useEffect, useState } from 'react'

import { getMovies, initialMovies } from './HomeModel'
import type { Movie } from '../../services/omdbMovieService'

export function useHomeViewModel() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadInitialMovies() {
      setLoading(true)
      setError('')

      try {
        const movieList = await initialMovies()
        setMovies(movieList)
      } catch (caughtError) {
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : 'Unable to load movies.'
        )
      } finally {
        setLoading(false)
      }
    }

    void loadInitialMovies()
  }, [])

  async function handleSearch() {
    setLoading(true)
    setError('')

    try {
      const movieList = await getMovies(query)
      setMovies(movieList)
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to search for movies.'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    query,
    setQuery,
    movies,
    loading,
    error,
    handleSearch,
  }
}

export default useHomeViewModel