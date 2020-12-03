import fetch from 'node-fetch';
import * as sample_trending from './sample_trending.json';

async function getTrending(type: string, window: string) {
	if (process.env.NODE_ENV === 'development') {
		console.log('sending sample data');
		return sample_trending;
	}
	let trendingURL = `${TMDB_TRENDING_BASE}/${type}/${window}?api_key=${process.env.TMDB_API_KEY}`;

	let response = await fetch(trendingURL);
	let json = await response.json();
	return json;
}

async function getTrendingTV() {}

const TMDB_TRENDING =
	'https://api.themoviedb.org/3/trending/movie/day?api_key=';

const TMDB_TRENDING_BASE = 'https://api.themoviedb.org/3/trending';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const TMDB_MOVIE_URL = 'https://api.themoviedb.org/3/movie/movie_id?api_key=';

const TMDB_TYPES = {
	type: ['tv', 'movie', 'person'],
	window: ['day', 'week'],
};

export {
	getTrending,
	getTrendingTV,
	TMDB_TRENDING,
	TMDB_IMAGE_URL,
	TMDB_MOVIE_URL,
	TMDB_TYPES,
};
