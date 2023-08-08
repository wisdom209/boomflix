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
			<swiper-container slides-per-view="auto" space-between="5" style={{width: '50em' }}>
				{Array(10).fill('_').map((v, i) => <swiper-slide key={i}>
					<Card sx={{ marginRight: "5px" }}>
						<CardActionArea>
							<swiper-container>
								<swiper-slide>
									<CardMedia
										title='cast'
										image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/500`} style={{ height: '200px' }}
									>
										<Box sx={{ bgcolor: 'black', translate: '0px 175px', opacity: '0.8', textAlign: 'center' }} style={{ color: 'white' }}>
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
