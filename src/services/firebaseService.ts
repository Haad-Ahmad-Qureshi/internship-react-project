import { initializeApp } from 'firebase/app'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
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

export const db = getFirestore(firebaseApp)

const favouritesCollection = collection(db, 'favourites')

export async function addFavourite(movie: Movie): Promise<void> {
  try {
    await setDoc(doc(favouritesCollection, movie.imdbID), movie)
  } catch (error) {
    console.error('Failed to add favourite:', error)
    throw new Error('Unable to add movie to favourites.')
  }
}

export async function removeFavourite(imdbID: string): Promise<void> {
  try {
    await deleteDoc(doc(favouritesCollection, imdbID))
  } catch (error) {
    console.error('Failed to remove favourite:', error)
    throw new Error('Unable to remove movie from favourites.')
  }
}

export async function getFavourites(): Promise<Movie[]> {
  try {
    const snapshot = await getDocs(favouritesCollection)

    return snapshot.docs.map((document) => document.data() as Movie)
  } catch (error) {
    console.error('Failed to get favourite movies:', error)
    throw new Error('Unable to load favourite movies.')
  }
}

export default db