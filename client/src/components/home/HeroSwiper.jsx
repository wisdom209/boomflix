import { Box, Stack } from "@mui/material"
import BackgroundHeroImg from "./BackgroundHeroImg"
import MediaDescription from "./MediaDescription"
import WatchNowButton from "../global/WatchNowButton"

const HeroSwiper = () => {
	return (
		<swiper-container>
			{[1, 2, 3, 4].map((v, i) =>
				<swiper-slide key={i}>
					<BackgroundHeroImg img={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/500`} />
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

							<MediaDescription />
							<WatchNowButton />
						</Stack>

					</Box>
				</swiper-slide>
			)}
		</swiper-container>
	)
}

export default HeroSwiper
