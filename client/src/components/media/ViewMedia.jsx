import React from 'react'
import HeroBackground from './HeroBackground'
import { Typography, Stack, Box, Button, Hidden } from '@mui/material'
import ImageSwiper from '../home/ImageSwiper'
import RedDivider from '../global/RedDivder'
import { MovieInfoBox, MovieInfoBoxNoCast } from './MediaDescription'

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
							justifyContent: 'center',
							background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 1), transparent)'
						}}>
							<Hidden mdDown>
								<Stack zIndex={3} direction="row" spacing={2} mt={10}>
									<img src="/jetli.jpeg" width='100%' />
									<MovieInfoBoxNoCast />
								</Stack>
							</Hidden>
							<Hidden mdUp>
								<Stack zIndex={3} direction="row" spacing={2} mt={1} width="100vw" sx={{ display: 'grid', placeContent: 'center' }}>
									<img src="/jetli.jpeg" width='100%' height="400px" />
								</Stack>
							</Hidden>
						</Box>
					</HeroBackground>
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
