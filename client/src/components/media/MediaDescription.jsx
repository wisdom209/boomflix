import React from 'react'
import { Stack, Typography, Chip, IconButton, Card, CardMedia, CardActionArea, Box } from "@mui/material"
import CircularRating from '../global/CircularRating'
import WatchNowButton from '../global/WatchNowButton'
import { FavoriteBorderOutlined } from '@mui/icons-material'

const MediaDescription = () => {
	return (
		<Stack spacing={3}>
			<Stack>
				<Typography
					variant="h2"
					color="white"
					fontSize={40}
					fontWeight={800} >
					The Flash 2023
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating='7.5' size={50} />
				<Chip label="Animation" color="error" />
				<Chip label="Family" color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magni ab est minima, quaerat enim eaque culpa autem aspernatur rem eligendi obcaecati pariatur modi. Quos quas sit natus delectus incidunt.
				</Typography>
			</Stack>
			<Stack direction='row' spacing={2} alignItems='center'>
				<IconButton >
					<FavoriteBorderOutlined size="large" color="error" />
				</IconButton>

				<WatchNowButton />
			</Stack>
			<Stack style={{ height: '200px', width: '55vw'}}>
				<swiper-container slides-per-view="4">
					{[1, 2, 3, 5, 6, 7, 8].map((vi) => <swiper-slide>
						<Card sx={{ marginRight: "10px" }}>
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
							<CardMedia>

							</CardMedia>
						</Card>
					</swiper-slide>)}
				</swiper-container>
			</Stack>
		</Stack>
	)
}

export default MediaDescription
