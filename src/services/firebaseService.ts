import { initializeApp } from 'firebase/app'
import {
  getDatabase,
  ref,
  set,
  remove,
  get,
} from 'firebase/database'

import type { Movie } from './omdbMovieService'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getDatabase(firebaseApp)

export async function addFavourite(movie: Movie): Promise<void> {
  try {
    await set(ref(db, `favourites/${movie.imdbID}`), movie)
  } catch (error) {
    console.error('Failed to add favourite:', error)
    throw new Error('Unable to add movie to favourites.')
  }
}

export async function removeFavourite(imdbID: string): Promise<void> {
  try {
    await remove(ref(db, `favourites/${imdbID}`))
  } catch (error) {
    console.error('Failed to remove favourite:', error)
    throw new Error('Unable to remove movie from favourites.')
  }
}

export async function getFavourites(): Promise<Movie[]> {
  try {
    const snapshot = await get(ref(db, 'favourites'))

    if (!snapshot.exists()) {
      return []
    }

    const data = snapshot.val() as Record<string, Movie>

    return Object.values(data)
  } catch (error) {
    console.error('Failed to get favourite movies:', error)
    throw new Error('Unable to load favourite movies.')
  }
}

export default db