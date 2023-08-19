import React from 'react'
import HeroBackground from './HeroBackground'
import { Typography, Stack, Box, Button, Hidden } from '@mui/material'
import ImageSwiper from '../home/ImageSwiper'
import RedDivider from '../global/RedDivder'
import { MovieInfoBox, MovieInfoBoxNoCast } from './MediaDescription'
import { useSelector } from 'react-redux'
import { buildImageUrl } from '../../api_client/axiosClient'

const ViewMedia = ({ mediaList, type, subtype }) => {
	let media = mediaList
	const mediaDetail = useSelector(state => state.global.media.mediaDetail)
	
	const poster = buildImageUrl(mediaDetail.poster_path)

	return (
		<Box>
			<Stack >
				<Box>
					<HeroBackground>
						<Box style={{
							zIndex: 2,
							paddingLeft: '50px',
							width: '80vw',
							minHeight: '100vh',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',

						}}>
							<Hidden mdDown>
								<Stack zIndex={3} direction="row" spacing={2} mt={10}>
									<img src={poster} width='30%' />
									<MovieInfoBoxNoCast />
								</Stack>
							</Hidden>
							<Hidden mdUp>
								<Stack zIndex={3} direction="row" spacing={2} mt={1} width="100vw" sx={{ display: 'grid', placeContent: 'center' }}>
									<img src={poster} width='100%' height="400px" />
								</Stack>
							</Hidden>
						</Box>
					</HeroBackground>
				</Box>


				<Stack style={{ translate: '0px -20px' }}>
					<Typography variant='h4' fontWeight={700} color="white">VIDEOS</Typography>
					<RedDivider />
				</Stack>
				<Hidden mdUp>
					<Stack spacing={0}>
						{media.map((v, i) => {

							if (i % 4 == 0) {
								const mediaSubset = media.slice(i, i + 4);
								return (<ImageSwiper key={i} media={mediaSubset} slides={2} />)
							}

						})}
					</Stack>
				</Hidden>
				<Hidden mdDown>
					<Stack spacing={0}>
						{media.map((v, i) => {

							if (i % 4 == 0) {
								const mediaSubset = media.slice(i, i + 4);
								return (<ImageSwiper key={i} media={mediaSubset} />)
							}

						})}
					</Stack>
				</Hidden>


				<Stack mt={5}>
					{/* <Button size='large' color="error">
						<Typography fontWeight={800}>Load More</Typography>
					</Button> */}
				</Stack>

			</Stack>
		</Box>
	)
}

export default ViewMedia
