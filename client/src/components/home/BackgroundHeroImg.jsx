import { Box, CardMedia, Card } from "@mui/material"

const BackgroundHeroImg = ({ img }) => {
	return (
		<Card sx={{
			minWidth: '100vw',
			zIndex: 0,
			position: 'absolute',
		}}>
			<CardMedia style={{
				width: '100vw',
				height: '100vh',
				objectFit: 'cover',
			}}
				image={img}
				component="img"
				loading="lazy"
			/>
		</Card>
	)
}

export default BackgroundHeroImg
