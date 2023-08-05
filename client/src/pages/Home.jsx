import Header from "../components/global/Header"
import MediaList from "../components/home/MediaList"
import HeroSwiper from "../components/home/HeroSwiper"
import Footer from "../components/global/Footer"
import { Box } from "@mui/material"

const Home = () => {
	return (
		<Box>
			<Header />
			<HeroSwiper />
			<MediaList />
			<Footer />
		</Box>
	)
}

export default Home
