import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" className="header-link" end>
          Home
        </NavLink>
        <NavLink to="/favourites" className="header-link">
          Favourites
        </NavLink>
      </nav>
      <div className="header-search">
        <input
          className="header-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="header-search-button" type="button">
          Search
        </button>
      </div>
    </header>
  )
}

export default Header
