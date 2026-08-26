// This file will contain communication with the OMDb API.

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface OmdbSearchResponse {
  Search?: Movie[]
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}

const API_URL = 'https://www.omdbapi.com/'

export async function searchMovies(query: string): Promise<Movie[]> {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY

  if (!apiKey) {
    throw new Error('Missing OMDb API key. Set VITE_OMDB_API_KEY in your environment.')
  }

  const params = new URLSearchParams({
    apikey: apiKey,
    s: query.trim(),
  })

  const response = await fetch(`${API_URL}?${params.toString()}`)

  if (!response.ok) {
    throw new Error(`OMDb request failed (${response.status} ${response.statusText}).`)
  }

  const data: OmdbSearchResponse = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'OMDb returned an error for this search.')
  }

  return data.Search ?? []
}

export const omdbMovieService = {
  searchMovies,
}

export default omdbMovieService
