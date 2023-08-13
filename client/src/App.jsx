import React from 'react';
import { register } from 'swiper/element/bundle';
import Home from './pages/Home';
import Media from './pages/Media';
import View from './pages/View';
import Character from './pages/Character';
import Favorites from './pages/Favorites';
import Reviews from './pages/Reviews';
import {ToastContainer} from 'react-toastify'

const App = () => {
	register();
	return (
		<>
			<Character />
			<ToastContainer/>
		</>
	)
}

export default App
