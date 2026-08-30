import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore'

import type { Movie } from './omdbMovieService'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

export const db = getFirestore(firebaseApp)

export async function addFavourite(
  userId: string,
  movie: Movie
): Promise<void> {
  if (!userId) {
    throw new Error('User ID is required to add a favourite.')
  }

  const favouritesCollection = collection(
    db,
    'users',
    userId,
    'favourites'
  )

  await setDoc(
    doc(favouritesCollection, movie.imdbID),
    movie
  )
}

export async function removeFavourite(
  userId: string,
  imdbID: string
): Promise<void> {
  if (!userId) {
    throw new Error('User ID is required to remove a favourite.')
  }

  const favouritesCollection = collection(
    db,
    'users',
    userId,
    'favourites'
  )

  await deleteDoc(
    doc(favouritesCollection, imdbID)
  )
}

export async function getFavourites(
  userId: string
): Promise<Movie[]> {
  if (!userId) {
    throw new Error('User ID is required to load favourites.')
  }

  const favouritesCollection = collection(
    db,
    'users',
    userId,
    'favourites'
  )

  const snapshot = await getDocs(favouritesCollection)

  return snapshot.docs.map(
    (document) => document.data() as Movie
  )
}

export default db