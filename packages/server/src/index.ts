import express from 'express';
import { join } from 'path';

import { getTrending, TMDB_TYPES } from './tmdb';

if (process.env.NODE_ENV === 'development') {
	const dotenv = require('dotenv');
	dotenv.config({ path: '../server/.env' });
}

const app = express();
const port = process.env.PORT || 8080;

const staticPath =
	process.env.NODE_ENV === 'development'
		? join(__dirname, '../../build/public')
		: join(__dirname, 'public');

app.use(express.static(join(staticPath)));

app.get('/api/v1/trending', async (req, res) => {
	const type: string = <string>req.query.type;
	const window: string = <string>req.query.window;
	let response;
	let statusCode: number;
	if (TMDB_TYPES.type.includes(type) && TMDB_TYPES.window.includes(window)) {
		response = await getTrending(type, window);
		statusCode = 200;
	} else {
		response =
			"I'm using TMDB API for this data. You can too. Visit: https://www.themoviedb.org/documentation/api";

		statusCode = 404;
	}

	res.send(JSON.stringify({ response, statusCode }));
});

app.listen(port, () => {
	console.log(`app started on port ${port}`);
});
