import { PlayArrow } from "@mui/icons-material"
import { useState } from "react"
import MediaCard from "./MediaCard"
import { useSelector } from "react-redux"
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const ImageSwiper = ({ title, media }) => {

	return (
		<swiper-container slides-per-view="3" navigation={true} modules={[Navigation]} className="mySwiper" style={{ height: '300px' }}>
			{media.map((v, i) => {
				return <swiper-slide key={i} lazy="true">

					<MediaCard media={v} />

				</swiper-slide>
			})}
		</swiper-container>
	)
}

export default ImageSwiper
