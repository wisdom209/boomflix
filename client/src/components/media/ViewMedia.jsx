import React from 'react'
import HeroBackground from './HeroBackground'
import { Typography, Stack, Chip, Box, Button } from '@mui/material'
import CircularRating from '../global/CircularRating'
import WatchNowButton from '../global/WatchNowButton'
import ImageSwiper from '../home/ImageSwiper'
import RedDivider from '../global/RedDivder'

const ViewMedia = () => {
	return (
		<Box>
			<Stack >
				<Box>
					<HeroBackground>
						<Box style={{
							postion: 'absolute',
							zIndex: 2,
							paddingLeft: '50px',
							width: '500px',
							minHeight: '100vh',
							display: 'flex',
							alignItems: 'center',
							width: '100vw',
							background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 1), transparent)'
						}}>
							<Stack spacing={4} width='600px'>
								<Typography variant="h3" fontWeight={700} color="white ">Openheimer</Typography>

								<Stack direction='row' spacing={2}>

									<CircularRating rating='7.5' size={50} />

									<Chip label="Animation" color="error" />
									<Chip label="Family" color="error" />

								</Stack>

								<Typography color="white"  >
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet. Quaerat ea autem voluptatum numquam quae, cum dignissimos doloremque sapiente minus ipsum amet nihil facilis rerum quam itaque soluta cupiditate!
								</Typography>

								<WatchNowButton />
							</Stack>
						</Box>
					</HeroBackground>
				</Box>

				<Box style={{ translate: '0px -150px', margin: '0px 20px', zIndex: '3' }}>
					<Stack direction='row'>
						<Stack flexGrow={1}>

							<Typography color="white" style={{ width: '200px', fontWeight: 700, fontSize: '30px' }}>Movies</Typography>

						</Stack>

						<Stack direction='row' spacing={2}>
							<Button variant='contained' color="error">
								<Typography>POPULAR</Typography>
							</Button>
							<Button variant='contained' color="error">
								<Typography>TOP RATED</Typography>
							</Button>
						</Stack>
					</Stack>

				</Box>

				<Stack style={{ translate: '0px -20px' }}>
					<Typography variant='h4' fontWeight={700} color="white">VIDEOS</Typography>
					<RedDivider />
				</Stack>

				<Stack spacing={0}>
					{Array(16).fill('_').map((v, i) => {
						if (i % 4 == 0) {
							return (<ImageSwiper key={i} />)
						}
					})}
				</Stack>
				
				<Stack mt={5}>
					<Button size='large' color="error">
						<Typography fontWeight={800}>Load More</Typography>
					</Button>
				</Stack>

			</Stack>
		</Box>
	)
}

export default ViewMedia
