import Header from "../components/global/Header"
import MediaList from "../components/home/MediaList"
import HeroSwiper from "../components/home/HeroSwiper"
import Footer from "../components/global/Footer"
import { Box } from "@mui/material"
import Loading from "./Loading"
import useFetchHome from "../hooks/useFetchHome"


const Home = () => {

	const [trendingMovies, media] = useFetchHome();

	return (
		<Box>
			{trendingMovies && Object.keys(media).length >= 4 ? <Box>
				<Header />

				<HeroSwiper trendingMovies={trendingMovies} />

				<MediaList media={media} />
				<Footer />
			</Box> :
				<Loading />
			}

		</Box>

	)
}

export default Home
