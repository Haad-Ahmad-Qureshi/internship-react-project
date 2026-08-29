import { searchMovies, type Movie } from '../../services/omdbMovieService'

export async function getMovies(query: string): Promise<Movie[]> {
	const cleanedQuery = query.trim()

	if (cleanedQuery.length < 2) {
		throw new Error('Search query must contain at least two characters.')
	}

	return searchMovies(cleanedQuery)
}

export class HomeModel {}

export default HomeModel
