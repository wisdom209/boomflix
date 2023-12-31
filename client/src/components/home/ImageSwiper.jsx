import { Box } from "@mui/material";
import MediaCard from "./MediaCard";
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const ImageSwiper = ({ title, media, slides, type }) => {

	return (
		<>
			{title == 'VIDEOS' ?
				<Box>
					<swiper-container slides-per-view="1" navigation={true} modules={[Navigation]} className="mySwiper" style={{ height: '510px', background: '#444444' }}>
						{media.map((v, i) => {
							return <swiper-slide key={i} lazy="true">

								<iframe className='video'

									style={{ height: '500px', width: '99%', margin: '5px' }}
									title='Youtube player'
									sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
									src={`https://youtube.com/embed/${v.key}?autoplay=0`}>
								</iframe>

							</swiper-slide>
						})}
					</swiper-container>
				</Box>
				:
				<swiper-container slides-per-view={slides || "3"} navigation={true} modules={[Navigation]} className="mySwiper" style={{ height: '300px' }}>
					{media.map((v, i) => {
						return <swiper-slide key={i} lazy="true">

							<MediaCard media={v} media_type={type} />

						</swiper-slide>
					})}
				</swiper-container>
			}</>

	)
}

export default ImageSwiper
