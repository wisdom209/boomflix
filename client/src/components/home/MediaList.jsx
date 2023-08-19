import { Stack } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MediaSubSection from '../global/MediaSubSection';

const MediaList = ({ media }) => {

	return (
		<Stack mt={2} mb spacing={2}>
			{media.popularMovies && <MediaSubSection title="POPULAR MOVIES" media={media.popularMovies} type='movie' />}
			{media.popularSeries && <MediaSubSection title="POPULAR TV SERIES" media={media.popularSeries} type='series' />}
			{media.topratedMovies && <MediaSubSection title="TOP RATED MOVIES" media={media.topratedMovies} type='movie' />}
			{media.topratedSeries && <MediaSubSection title="TOP RATED TV SERIES" media={media.topratedSeries} type='series' />}
		</Stack>

	)
}

export default MediaList
