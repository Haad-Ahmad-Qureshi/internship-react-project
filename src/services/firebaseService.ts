import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
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

export const auth = getAuth(firebaseApp)

export const db = getDatabase(firebaseApp)

export async function addFavourite(
  userId: string,
  movie: Movie
): Promise<void> {
  if (!userId) {
    throw new Error('User ID is required to add a favourite.')
  }

  const favouriteRef = ref(
    db,
    `users/${userId}/favourites/${movie.imdbID}`
  )

  await set(favouriteRef, movie)
}

export async function removeFavourite(
  userId: string,
  imdbID: string
): Promise<void> {
  if (!userId) {
    throw new Error('User ID is required to remove a favourite.')
  }

  const favouriteRef = ref(
    db,
    `users/${userId}/favourites/${imdbID}`
  )

  await remove(favouriteRef)
}

export async function getFavourites(
  userId: string
): Promise<Movie[]> {
  if (!userId) {
    throw new Error('User ID is required to load favourites.')
  }

  const favouritesRef = ref(
    db,
    `users/${userId}/favourites`
  )

  const snapshot = await get(favouritesRef)

  if (!snapshot.exists()) {
    return []
  }

  const data = snapshot.val()

  return Object.values(data) as Movie[]
}

export default db