import { Box, Stack } from "@mui/material"
import BackgroundHeroImg from "./BackgroundHeroImg"
import MediaDescription from "./MediaDescription"
import WatchNowButton from "../global/WatchNowButton"
import { useEffect } from "react"
import { buildImageUrl, getTrending } from "../../api_client/axiosClient"
import { useState } from "react"

const HeroSwiper = () => {
	const [trendingMovies, setTrendingMovies] = useState(false)
	useEffect(() => {

		getTrending('movie').then(response => {
			setTrendingMovies(response.data.results)
		})
			.catch(e => { e })


	}, [])

	return (
		<swiper-container>
			{console.log(trendingMovies)}
			{/* {console.log(buildImageUrl(trendingMovies[0].backdrop_path))} */}
			{trendingMovies == false ? <div>Loading</div> : trendingMovies.map((v, i) =>
				<swiper-slide key={i}>
					<BackgroundHeroImg img={buildImageUrl(v.backdrop_path)} />
					<Box sx={{
						height: '100vh',
						width: '100vw',
						background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 1), transparent)',
						position: 'relative',
						zIndex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>

						<Stack width='600px' spacing={2} mt={14} pl={2} >

							<MediaDescription original_title={v.original_title}
								overview={v.overview}
								vote_average={v.vote_average} />
							<WatchNowButton />
						</Stack>

					</Box>
				</swiper-slide>
			)}
		</swiper-container>
	)
}

export default HeroSwiper
