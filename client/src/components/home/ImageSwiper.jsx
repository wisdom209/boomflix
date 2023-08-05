import { PlayArrow } from "@mui/icons-material"
import { useState } from "react"
import MediaCard from "./MediaCard"

const ImageSwiper = () => {
	return (
		<swiper-container slides-per-view="3" style={{ height: '300px' }}>
			{['1', '2', '3', '4'].map((v, i) => <swiper-slide key={i} >

				<MediaCard image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/500`} />
			
			</swiper-slide>)}
		</swiper-container>
	)
}

export default ImageSwiper
