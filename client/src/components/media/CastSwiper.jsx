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
import { useSelector } from 'react-redux'
import { buildImageUrl } from '../../api_client/axiosClient'

const CastSwiper = ({ width, slides }) => {
	const cast = useSelector(state => state.global.media.mediaDetail.cast)
	
	return (
		<Stack>
			<Typography variant='h4' color="white">Cast</Typography>
			<RedDivider />
			<swiper-container slides-per-view={slides} space-between="5" 
			style={{ width: `${width}`}}>
				{cast.map((v, i) => <swiper-slide key={i}>
					<Card sx={{ marginRight: "5px" }}>
						<CardActionArea>
							<swiper-container>
								<swiper-slide>
									<CardMedia
										title='cast'
										image={buildImageUrl(v.profile_path)} style={{ height: '250px' }}
									>
										<Box sx={{ bgcolor: 'black', translate: '0px 225px', opacity: '0.8', textAlign: 'center' }} style={{ color: 'white' }}>
											<Typography variant='subtitle1'>{v.name}</Typography>
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
