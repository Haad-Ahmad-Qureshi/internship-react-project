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

  console.log('[omdbMovieService] searchMovies called with query:', query)

  if (!apiKey) {
    console.error('[omdbMovieService] Missing API key (VITE_OMDB_API_KEY)')
    throw new Error('Missing OMDb API key. Set VITE_OMDB_API_KEY in your environment.')
  }

  const params = new URLSearchParams({
    apikey: apiKey,
    s: query.trim(),
  })

  const requestUrl = `${API_URL}?${params.toString()}`
  // Mask the API key when logging the URL
  const maskedUrl = requestUrl.replace(apiKey, '***')
  console.log('[omdbMovieService] Fetching URL:', maskedUrl)

  const response = await fetch(requestUrl)

  if (!response.ok) {
    console.error(
      `[omdbMovieService] HTTP error: ${response.status} ${response.statusText}`
    )
    throw new Error(`OMDb request failed (${response.status} ${response.statusText}).`)
  }

  const data: OmdbSearchResponse = await response.json()

  console.log(
    `[omdbMovieService] OMDb response: Response=${data.Response}, totalResults=${data.totalResults}, results=${
      data.Search?.length ?? 0
    }`
  )

  if (data.Response === 'False') {
    console.error('[omdbMovieService] OMDb returned error:', data.Error)
    throw new Error(data.Error ?? 'OMDb returned an error for this search.')
  }

  return data.Search ?? []
}

export const omdbMovieService = {
  searchMovies,
}


export default omdbMovieService

if (import.meta.env.DEV) {
  ;(window as any).searchMovies = searchMovies
}