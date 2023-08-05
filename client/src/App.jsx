import React from 'react';
import { register } from 'swiper/element/bundle';
import Home from './pages/Home';
import Media from './pages/Media';

const App = () => {
	register();
	return (
		<>
			<Media />
		</>
	)
}

export default App
