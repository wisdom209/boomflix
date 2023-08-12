import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';
import RedDivider from '../global/RedDivder';
import Review from './Review';
import { useSelector } from 'react-redux';

const MediaList = () => {

	const similarMovies = useSelector(state => state.global.media.similar)
	let videos = useSelector(state => state.global.media.video)
	videos = videos.results.filter((v, i) => v.site == 'YouTube')


	return (
		<>
			{similarMovies?.error == undefined &&
				<Stack mt={2} mb spacing={3}>
					<MediaSubSection title="VIDEOS" media={videos} />
					{/* 	<MediaSubSection title="BACKDROPS" />
			<MediaSubSection title="POSTERS" /> */}
					<Box />
					<Review />
					{similarMovies && <MediaSubSection title="YOU MAY ALSO LIKE" media={similarMovies.results} />}
				</Stack>
			}
		</>


	)
}

export default MediaList
