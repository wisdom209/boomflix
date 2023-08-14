import React from 'react';
import { register } from 'swiper/element/bundle';
import Home from './pages/Home';
import Media from './pages/Media';
import View from './pages/View';
import Character from './pages/Character';
import Favorites from './pages/Favorites';
import Reviews from './pages/Reviews';
import { ToastContainer } from 'react-toastify'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
	register();
	return (
		<>
			<Router>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/view/:media_type/:media_id" element={<View />}></Route>
					<Route path="/character/:media_type/:media_id" element={<Character />}></Route>
					<Route path="/favorites" element={<Favorites />}></Route>
					<Route path="/reviews" element={<Reviews />}></Route>
					<Route path="/media/:media_type/:media_id" element={<Media />}></Route>
				</Routes>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
