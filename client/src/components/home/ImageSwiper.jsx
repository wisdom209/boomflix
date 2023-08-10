import { PlayArrow } from "@mui/icons-material"
import { useState } from "react"
import MediaCard from "./MediaCard"
import { useSelector } from "react-redux"

const ImageSwiper = ({ title, media }) => {
	
	return (
		<swiper-container slides-per-view="3" style={{ height: '300px' }}>
			{media.map((v, i) => <swiper-slide key={i} >

				<MediaCard image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/500`} media={v}/>

			</swiper-slide>)}
		</swiper-container>
	)
}

export default ImageSwiper
