import { hot } from 'react-hot-loader/root';

import React, { useState, useEffect } from 'react';

import Landing from './components/Landing';
import {
	TMDB_TRENDING_MOVIE,
	TMDB_TRENDING_MOVIE_RESPONSE,
	TMDB_TRENDING_PERSON,
	TMDB_TRENDING_RESPONSE,
} from './typings/tmdb';

function App(): JSX.Element {
	const [isLoading, setisLoading] = useState(true);
	const [list, setList] = useState<
		TMDB_TRENDING_MOVIE[] | TMDB_TRENDING_PERSON[]
	>();
	async function getTrendingMovies() {
		const response = await fetch(`/api/v1/trending?type=movie&window=day`);
		const json: TMDB_TRENDING_RESPONSE = await response.json();
		console.log(json.response);
		setList(json.response.results);
	}

	useEffect(() => {
		getTrendingMovies();
	}, []);

	return (
		<div className='min-h-screen min-w-full bg-rose-200 dark:bg-black justify-center items-center'>
			<Landing />
		</div>
	);
}

export default hot(App);
