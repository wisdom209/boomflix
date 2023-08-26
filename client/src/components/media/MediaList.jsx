import { Avatar, Box, Hidden, Stack, Typography } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';
import RedDivider from '../global/RedDivder';
import Review from './Review';
import { useSelector } from 'react-redux';
import CastSwiper from './CastSwiper';

const MediaList = () => {

	const similarMovies = useSelector(state => state.global.media.similar)
	let videos = useSelector(state => state.global.media.video)
	videos = videos.results.filter((v, i) => v.site == 'YouTube')

	return (
		<>
			{similarMovies?.error == undefined &&
				<Stack mt={3} mb spacing={3}>
					<Box />
					<MediaSubSection  title="VIDEOS" media={videos} />
					<Box />
					<Box>

					</Box>
					<Hidden mdDown >
						<CastSwiper slides={3} />
					</Hidden>
					<Hidden mdUp >
						<CastSwiper slides={2} />
					</Hidden>
					<Box />
					<Review />
					{similarMovies && <MediaSubSection title="YOU MAY ALSO LIKE" media={similarMovies.results} type={similarMovies.mediaTYPE} />}
				</Stack>
			}
		</>


	)
}

export default MediaList
