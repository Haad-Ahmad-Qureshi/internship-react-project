import { useEffect, useState } from 'react'

import {
  deleteFavourite,
  loadFavourites,
  saveFavourite,
} from './FavouritesModel'

import { useAuth } from '../../context/AuthContext'

import type { Movie } from '../../services/omdbMovieService'

export function useFavouritesViewModel() {
  const { user } = useAuth()

  const [favourites, setFavourites] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadMovies() {
    if (!user) {
      setFavourites([])
      return
    }

    setLoading(true)
    setError('')

    try {
      const movies = await loadFavourites(user.uid)
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

  async function saveMovie(movie: Movie) {
    if (!user) {
      setError('You must be signed in to add favourites.')
      return
    }

    setError('')

    try {
      await saveFavourite(user.uid, movie)

      setFavourites((currentFavourites) => {
        const alreadyExists = currentFavourites.some(
          (favourite) => favourite.imdbID === movie.imdbID
        )

        if (alreadyExists) {
          return currentFavourites
        }

        return [...currentFavourites, movie]
      })
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to add movie to favourites.'
      )
    }
  }

  async function removeMovie(imdbID: string) {
    if (!user) {
      setError('You must be signed in to remove favourites.')
      return
    }

    setLoading(true)
    setError('')

    try {
      await deleteFavourite(user.uid, imdbID)

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
  }, [user])

  return {
    favourites,
    loading,
    error,
    loadMovies,
    saveMovie,
    removeMovie,
  }
}

export default useFavouritesViewModel