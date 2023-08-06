import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';
import RedDivider from '../global/RedDivder';
import Review from './Review';

const MediaList = () => {
	return (
		<Stack mt={2} mb spacing={3}>
			<MediaSubSection title="VIDEOS" />
			<MediaSubSection title="BACKDROPS" />
			<MediaSubSection title="POSTERS" />
			<Box />
			<Review />
			<MediaSubSection title="YOU MAY ALSO LIKE" />
		</Stack>

	)
}

export default MediaList
