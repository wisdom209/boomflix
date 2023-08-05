import { Stack } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';

const MediaList = () => {
	return (
		<Stack mt={2} mb spacing={2}>
			<MediaSubSection title="POPULAR MOVIES" />
			<MediaSubSection title="POPULAR TV SERIES" />
			<MediaSubSection title="TOP RATED MOVIES" />
			<MediaSubSection title="TOP RATED TV SERIES" />
		</Stack>

	)
}

export default MediaList
