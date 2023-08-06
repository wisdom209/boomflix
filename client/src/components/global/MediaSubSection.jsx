import { Typography, Box } from "@mui/material"

import ImageSwiper from '../home/ImageSwiper'
import RedDivider from '../global/RedDivder'

const MediaSubSection = ({ title }) => {
	return (
		<Box>
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

			<ImageSwiper />
		</Box>
	)
}

export default MediaSubSection
