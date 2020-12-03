import React from 'react';

function Navbar(): JSX.Element {
	return (
		<div className='tracking-wide font-sans flex text-black dark:text-white text-base p-2'>
			<p className='p-1'>HOME</p>
			<p className='p-1'>MOVIES</p>
			<p className='p-1'>TV</p>
			<p className='p-1'>PERSON</p>
		</div>
	);
}

export default Navbar;
