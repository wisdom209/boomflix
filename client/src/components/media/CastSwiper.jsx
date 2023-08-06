import React from 'react'
import {
	Card,
	CardActionArea,
	CardMedia,
	Box,
	Typography,
	Stack
} from '@mui/material'
import RedDivider from '../global/RedDivder'

const CastSwiper = () => {
	return (
		<Stack>
			<Typography variant='h4' color="white">Cast</Typography>
			<RedDivider />
			<swiper-container slides-per-view="4">
				{[1, 2, 3, 5, 6, 7, 8].map((v, i) => <swiper-slide>
					<Card sx={{ marginRight: "5px" }}>
						<CardActionArea>
							<swiper-container>
								<swiper-slide>
									<CardMedia
										title='cast'
										image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/500`} style={{ widht: '200px', height: '200px' }}
									>
										<Box sx={{ bgcolor: 'black', color: 'whitesmoke', translate: '0px 175px', opacity: '0.8', textAlign: 'center' }}>
											<Typography variant='subtitle1'>Jet Li</Typography>
										</Box>

									</CardMedia>
								</swiper-slide>
							</swiper-container>
						</CardActionArea>
					</Card>
				</swiper-slide>)}
			</swiper-container>
		</Stack>

	)
}

export default CastSwiper
