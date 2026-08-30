import {
  loginUser,
  logoutUser,
  registerUser,
} from '../../services/authService'

import type { User } from 'firebase/auth'

function validateCredentials(email: string, password: string): {
  email: string
  password: string
} {
  const normalizedEmail = email.trim().toLowerCase()
  const trimmedPassword = password.trim()

  if (!normalizedEmail) {
    throw new Error('Email is required.')
  }

  if (!trimmedPassword) {
    throw new Error('Password is required.')
  }

  if (trimmedPassword.length < 6) {
    throw new Error('Password must contain at least six characters.')
  }

  return {
    email: normalizedEmail,
    password: trimmedPassword,
  }
}

export async function register(
  email: string,
  password: string
): Promise<User> {
  const credentials = validateCredentials(email, password)

  return registerUser(credentials.email, credentials.password)
}

export async function login(
  email: string,
  password: string
): Promise<User> {
  const credentials = validateCredentials(email, password)

  return loginUser(credentials.email, credentials.password)
}

export async function logout(): Promise<void> {
  return logoutUser()
}

export default {
  register,
  login,
  logout,
}