import { Box, Stack } from "@mui/material"
import BackgroundHeroImg from "./BackgroundHeroImg"
import WatchNowButton from "../global/WatchNowButton"
import { buildImageUrl } from "../../api_client/axiosClient"
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import { useSelector } from "react-redux"


const styles = {
	backgroundBox: {
		height: '100vh',
		width: '100vw',
		background: 'linear-gradient(to top right, rgba(0,0,0, 1), \
		transparent), linear-gradient(to top, rgba(0,0,0, 1), transparent)',
		position: 'relative',
		zIndex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}


export const getGenreFromList = (genreList, genreIds) => {


	if (!Array.isArray(genreList)) {
		genreList = genreList.genres
	}

	if (!genreIds) {
		return [{ name: 'undefined' }, { name: 'undefined' }]
	}

	const new_list = genreList.filter((v, i) => {

		return genreIds.includes(Number(v.id))
	})

	return new_list
}

const HeroSwiper = ({ genres, trendingMovies }) => {

	const genreList = useSelector(state => state.global.genres)

	return (
		<swiper-container navigation={true} modules={[Navigation]} className="mySwiper" >
			{trendingMovies !== undefined && trendingMovies.map((v, i) =>
				<swiper-slide key={i} lazy="true">
					<BackgroundHeroImg img={buildImageUrl(v.backdrop_path)} />
					<Box sx={styles.backgroundBox}>
						<Stack width='600px' spacing={2} mt={14} pl={2} >
							{/* <MediaDescription original_title={v.original_title}
								overview={v.overview}
								vote_average={v.vote_average}
								genres={getGenreFromList(genreList, v.genre_ids)} /> */}
							<WatchNowButton videoId={v.id} videoType='movie' />
						</Stack>

					</Box>
				</swiper-slide>
			)}
		</swiper-container>
	)
}

export default HeroSwiper
