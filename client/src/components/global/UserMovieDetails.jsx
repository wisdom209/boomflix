import React, { useEffect, useState } from 'react'
import { Typography, Button, Stack, Card, CardMedia, Box, CardActionArea } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { buildImageUrl, getFavorites, getMediaDetail } from '../../api_client/axiosClient'
import Loading from '../../pages/Loading'
import { useNavigate } from 'react-router-dom'

const UserMovieDetails = ({ expectedDetail, count }) => {
	const [media, setMedia] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (expectedDetail === 'YOUR FAVORITES') {
			getFavorites().then(response => {
				const promises = response.data.map((v, i) => getMediaDetail(v.mediaType, v.mediaId));

				Promise.allSettled(promises).then(responses => {

					console.log(responses)
					responses.map((v, i) => {
						response.data[i].details = v.value.data;
					})
					setMedia(response.data);
					console.log(media)
				})

			}).catch(e => {
				console.log(e)
			})
		}
	}, [expectedDetail])

	const navigate = useNavigate()

	return (
		<>
			{loading && media.length == 0 ? <Loading /> : <>
				<Typography color="white" fontWeight={700} variant='h5' mt="100px" ml="20px" mb="20px" textAlign="center">{expectedDetail} ({media.length})</Typography>

				<Stack flexGrow={1} direction="row" flexWrap='wrap' alignItems="center" justifyContent="center">
					{media.map((v, i) => {
						return <Stack key={i} spacing={2} ml="20px" width='300px' mb="20px" position='relative'>
							<Card >
							    <CardActionArea
									onClick={()=> navigate(`/media/${v.mediaType}/${v.mediaId}`)}
								>
									<CardMedia
										sx={{ objectFit: 'cover', width: '500px', margin: '0px', background: 'grey' }}
										height='300px'
										component='img'
										alt="media banner"
										loading='lazy'
										src={buildImageUrl(v.details?.poster_path)}
									/>

									<Box sx={{ translate: '0px -28px', opacity: '0.8', textAlign: 'center' }} style={{ position: 'absolute', color: 'white', background: 'black', margin: 0, padding: 0, width: '300px' }}>
										<Typography variant='subtitle1'>{v.details?.title || v.details?.original_title || v.details?.original_name || v.details?.name}</Typography>
									</Box>
								</CardActionArea>
							</Card>
							<Button endIcon={<Delete />} style={{ backgroundColor: 'red', color: 'white' }}>REMOVE</Button>
						</Stack>
					}

					)}

				</Stack>

			</>
			}
		</>
	)
}

export default UserMovieDetails
