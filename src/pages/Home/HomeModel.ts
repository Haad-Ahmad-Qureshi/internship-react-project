import { searchMovies, type Movie } from '../../services/omdbMovieService'

const initialMovieSeeds = [
  'Batman',
  'Avengers',
  'Harry Potter',
  'Star Wars',
  'Spider-Man',
  'Marvel',
  'Disney',
  'Matrix',
  'Lord of the Rings',
  'Fast',
  'Mission Impossible',
  'Pixar',
  'Horror',
  'Comedy',
  'Action',
]

export async function getMovies(query: string): Promise<Movie[]> {
  const cleanedQuery = query.trim()

  if (cleanedQuery.length < 2) {
    throw new Error('Search query must contain at least two characters.')
  }

  return searchMovies(cleanedQuery)
}

export async function initialMovies(): Promise<Movie[]> {
  const shuffledSeeds = [...initialMovieSeeds]

  for (let index = shuffledSeeds.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffledSeeds[index], shuffledSeeds[randomIndex]] = [
      shuffledSeeds[randomIndex],
      shuffledSeeds[index],
    ]
  }

  const movieLists = await Promise.all(
    shuffledSeeds.map((seed) => searchMovies(seed))
  )

  const uniqueMovies = Array.from(
    new Map(
      movieLists
        .flat()
        .map((movie) => [movie.imdbID, movie])
    ).values()
  )

  for (let index = uniqueMovies.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[uniqueMovies[index], uniqueMovies[randomIndex]] = [
      uniqueMovies[randomIndex],
      uniqueMovies[index],
    ]
  }

  return uniqueMovies.slice(0, 20)
}

export class HomeModel {}

export default HomeModel