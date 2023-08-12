import React from 'react'
import { Card, CardActionArea, CardMedia, Stack, Button, Typography, Box } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import CircularRating from '../global/CircularRating'
import { useState } from 'react'
import { buildImageUrl } from '../../api_client/axiosClient'

const MediaCard = ({ media }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Card style={{ position: 'relative', background: 'black' }}>
			<CardActionArea
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<CardMedia
					sx={{ objectFit: 'cover', width: '500px', margin: '0px', background: 'black' }}
					height='300px'
					component='img'
					alt="movie banner"
					loading='lazy'
					src={buildImageUrl(media.poster_path)}
				/>
				{isHovered && <Stack sx={{
					height: '300px',
					translate: '0px -300px',
					padding: '0px',
					margin: '0px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: 'linear-gradient(to right, rgba(0,0,0, 1), transparent)'
				}}>

					<Box sx={{ bgcolor: 'red', width: '100px', marginTop: '80px', borderRadius: '5px', height: '50px', display: 'grid', placeContent: 'center' }} >
						<PlayArrow sx={{ color: 'white' }} />
					</Box>
					<Box sx={{ alignSelf: 'start', marginLeft: '20px', marginTop: '20px' }}>
						<CircularRating rating={media.vote_average.toFixed(1)} size={50} />
						<Typography color="white" fontWeight={700}>{media.release_date?.slice(0, 4) || media.first_air_date?.slice(0, 4)}</Typography>
						<Typography color="white" fontWeight={700}>{media?.title || media.original_name}</Typography>
					</Box>
				</Stack>}
			</CardActionArea>

		</Card>
	)
}

export default MediaCard
