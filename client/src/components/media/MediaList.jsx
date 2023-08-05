import { Stack } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';

const MediaList = () => {
	return (
		<Stack mt={2} mb spacing={2}>
			<MediaSubSection title="POSTERS" />
			<MediaSubSection title="YOU MAY ALSO LIKE" />
		</Stack>

	)
}

export default MediaList
