import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
      <input type="search" placeholder="Search" aria-label="Search" />
      <button type="button">Search</button>
    </header>
  )
}

export default Header
