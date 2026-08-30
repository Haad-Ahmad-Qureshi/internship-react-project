import { useEffect, useState } from 'react'

import {
  deleteFavourite,
  loadFavourites,
} from './FavouritesModel'

import type { Movie } from '../../services/omdbMovieService'

export function useFavouritesViewModel() {
  const [favourites, setFavourites] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadMovies() {
    setLoading(true)
    setError('')

    try {
      const movies = await loadFavourites()
      setFavourites(movies)
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to load favourite movies.'
      )
    } finally {
      setLoading(false)
    }
  }

  async function removeMovie(imdbID: string) {
    setLoading(true)
    setError('')

    try {
      await deleteFavourite(imdbID)

      setFavourites((currentFavourites) =>
        currentFavourites.filter(
          (movie) => movie.imdbID !== imdbID
        )
      )
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to remove favourite movie.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadMovies()
  }, [])

  return {
    favourites,
    loading,
    error,
    loadMovies,
    removeMovie,
  }
}

export default useFavouritesViewModel