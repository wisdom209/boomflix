import React from 'react'
import { Card, CardActionArea, CardMedia, Stack, Button, Typography, Box } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import CircularRating from '../global/CircularRating'
import { useState } from 'react'

const MediaCard = ({ image }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Card style={{ position: 'relative', background: 'black' }}>
			<CardActionArea
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<CardMedia
					sx={{ objectFit: 'cover', width: '500px', margin: '0px' }}
					height='300px'
					component='img'
					alt="movie banner"
					src={image}
				/>
				{isHovered && <Stack sx={{
					height: '300px',
					translate: '0px -300px', padding: '0px', margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, rgba(0,0,0, 1), transparent)'
				}}>

					<Button sx={{ bgcolor: 'red', width: '50px', marginTop: '80px' }} disableRipple disableFocusRipple disableTouchRipple>
						<PlayArrow sx={{ color: 'white' }} />
					</Button>
					<Box sx={{ alignSelf: 'start', marginLeft: '20px', marginTop: '20px' }}>
						<CircularRating rating={8.5} size={50} />
						<Typography color="white" fontWeight={700}>2008</Typography>
						<Typography color="white" fontWeight={700}>Breaking Bad</Typography>
					</Box>
				</Stack>}
			</CardActionArea>

		</Card>
	)
}

export default MediaCard
