import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleHomeClick() {
    window.location.href = '/'
  }

  function handleSearch() {
    const cleanedQuery = query.trim()

    if (cleanedQuery.length < 2) {
      return
    }

    navigate(`/?search=${encodeURIComponent(cleanedQuery)}`)
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <button
          type="button"
          className="header-link"
          onClick={handleHomeClick}
        >
          Home
        </button>

        <NavLink
          to="/favourites"
          className="header-link"
        >
          Favourites
        </NavLink>
      </nav>

      <div className="header-search">
        <input
          className="header-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch()
            }
          }}
        />

        <button
          className="header-search-button"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  )
}

export default Header