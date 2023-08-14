import { Typography, Box } from "@mui/material"

import ImageSwiper from '../home/ImageSwiper'
import RedDivider from '../global/RedDivder'
import { useSelector } from "react-redux"

const MediaSubSection = ({ title, media }) => {
	return (
		<Box id={title == 'VIDEOS' ? 'video_section' : undefined} >
			<Typography sx={{
				fontWeight: '800',
				fontSize: '30px',
				color: 'white',
				marginTop: '50px',
				marginLeft: '10px'
			}}>
				{title}
			</Typography>

			<RedDivider />

			<ImageSwiper title={title} media={media} />
		</Box>
	)
}

export default MediaSubSection
