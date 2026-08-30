import { useState } from 'react'

import { login, register } from './AuthModel'

type AuthMode = 'login' | 'register'

export function useAuthViewModel() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<AuthMode>('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    setError('')
    setLoading(true)

    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await register(email, password)
      }

      setPassword('')
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Authentication failed.'
      )
    } finally {
      setLoading(false)
    }
  }

  function toggleMode() {
    setMode((currentMode) =>
      currentMode === 'login' ? 'register' : 'login'
    )
    setError('')
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    mode,
    loading,
    error,
    handleSubmit,
    toggleMode,
  }
}

export default useAuthViewModel