export type TMDB_TRENDING_MOVIE_RESPONSE = {
	response: {
		results: TMDB_TRENDING_MOVIE[];
	};
};

export type TMDB_TRENDING_RESPONSE = {
	response: {
		results: TMDB_TRENDING_MOVIE[] | TMDB_TRENDING_PERSON[];
	};
};

export type TMDB_TRENDING_MOVIE = {
	title: string;
	id: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type TMDB_TRENDING_TV = {
	original_name: string;
	id: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type TMDB_TRENDING_PERSON = {
	name: string;
	known_for: TMDB_TRENDING_TV[] | TMDB_TRENDING_MOVIE[];
};
