import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { getMovies, initialMovies } from './HomeModel'
import type { Movie } from '../../services/omdbMovieService'

export function useHomeViewModel() {
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchQuery = searchParams.get('search')?.trim() ?? ''

  useEffect(() => {
    async function loadMovies() {
      setLoading(true)
      setError('')

      try {
        if (searchQuery.length >= 2) {
          const movieList = await getMovies(searchQuery)
          setMovies(movieList)
          setQuery(searchQuery)
        } else {
          const movieList = await initialMovies()
          setMovies(movieList)
          setQuery('')
        }
      } catch (caughtError) {
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : 'Unable to load movies.'
        )
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    void loadMovies()
  }, [searchQuery])

  return {
    query,
    setQuery,
    movies,
    loading,
    error,
  }
}

export default useHomeViewModel