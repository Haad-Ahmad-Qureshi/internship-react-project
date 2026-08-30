import { useAuthViewModel } from './useAuthViewModel'

export function AuthView() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    mode,
    loading,
    error,
    handleSubmit,
    toggleMode,
  } = useAuthViewModel()

  const isLogin = mode === 'login'

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void handleSubmit()
  }

  return (
    <main>
      <h1>{isLogin ? 'Login' : 'Create Account'}</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading
            ? 'Please wait...'
            : isLogin
              ? 'Login'
              : 'Create Account'}
        </button>
      </form>

      <button type="button" onClick={toggleMode} disabled={loading}>
        {isLogin
          ? 'Need an account? Create Account'
          : 'Already have an account? Login'}
      </button>
    </main>
  )
}

export default AuthView