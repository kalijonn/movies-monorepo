import React, { useEffect, useState } from 'react';

import Navbar from './Nav';
import Hero from './Hero';
import List from './List';

const kalijonn = 'hello';
function Landing(): JSX.Element {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className='container mx-auto h-full'>
			<Navbar />
			<Hero />
			<List />
		</div>
	);
}

export default Landing;
