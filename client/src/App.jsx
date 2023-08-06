import React from 'react';
import { register } from 'swiper/element/bundle';
import Home from './pages/Home';
import Media from './pages/Media';
import View from './pages/View';

const App = () => {
	register();
	return (
		<>
			<View/>
		</>
	)
}

export default App
