import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'

import { auth } from './firebaseService'

function getAuthErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return 'An authentication error occurred.'
  }

  const firebaseError = error as Error & { code?: string }

  switch (firebaseError.code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered.'

    case 'auth/invalid-email':
      return 'Please enter a valid email address.'

    case 'auth/weak-password':
      return 'Password is too weak. Please use a stronger password.'

    case 'auth/user-not-found':
      return 'No account was found with this email.'

    case 'auth/wrong-password':
      return 'Incorrect password.'

    case 'auth/invalid-credential':
      return 'Invalid email or password.'

    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.'

    default:
      return firebaseError.message || 'Authentication failed.'
  }
}

export async function registerUser(
  email: string,
  password: string
): Promise<User> {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    return result.user
  } catch (error) {
    throw new Error(getAuthErrorMessage(error))
  }
}

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    return result.user
  } catch (error) {
    throw new Error(getAuthErrorMessage(error))
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(getAuthErrorMessage(error))
  }
}

export function subscribeToAuthChanges(
  callback: (user: User | null) => void
): () => void {
  return onAuthStateChanged(auth, callback)
}

export default {
  registerUser,
  loginUser,
  logoutUser,
  subscribeToAuthChanges,
}