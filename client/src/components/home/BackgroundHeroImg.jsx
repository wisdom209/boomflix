import { Box } from "@mui/material"

const BackgroundHeroImg = ({ img }) => {
	return (
		<Box sx={{
			zIndex: 0,
			position: 'absolute'
		}}>
			<img style={{
				width: '100vw',
				height: '100vh',
				objectFit: 'cover'
			}}
				src={img}
			/>
		</Box>
	)
}

export default BackgroundHeroImg
