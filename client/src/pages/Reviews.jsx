import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import Stack from '@mui/material/Stack'
import { Typography, Box, Button } from '@mui/material'
import RedDivider from '../components/global/RedDivder'
import { getAllReviews, getMediaDetail } from '../api_client/axiosClient'
import Cookies from 'js-cookie'
import { makeDate } from '../components/media/Review'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const Reviews = () => {
	const [reviews, setReviews] = useState([])
	const [username, setUsername] = useState(Cookies.get('username'))
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		getAllReviews().then((response) => {
			let updatedReviews = response.data.filter((v, i) => v.username === username)

			const promises = updatedReviews.map((v, i) => getMediaDetail(v.mediaType, v.mediaId))
			Promise.allSettled(promises).then(responses => {
				responses.map((v, i) => {
					response.data[i].details = v.value.data;
				})
				setIsLoading(false)
				setReviews(response.data);
			})
		})
	}, [])

	return (
		<> {isLoading ? <Loading /> :
			<Stack style={{ minHeight: '100vh' }}>
				<Header />
				<Stack spacing={2} mx={1} mt='80px'>
					<Typography fontWeight={700} fontSize='2rem' sx={{ color: 'white' }}>My Reviews ({reviews.length})</Typography>
					<RedDivider />
					{reviews.map((v, i, a) => {
						return <Box>
							<Button onClick={() => {
								if (v.mediaType === 'tv') {
									navigate(`/media/series/${v.mediaId}`)
								} else {
									navigate(`/media/${v.mediaType}/${v.mediaId}`)
								}
							}}>
								<Typography fontWeight={700} sx={{ color: 'white' }} variant='h5'>
									{v.details?.title || v.details?.original_title || v.details?.original_name || v.details?.name}
								</Typography>
							</Button>
							<Typography color='white' mx={1}>{makeDate(v.createdAt)}</Typography>
							<Typography variant='subtitle1' mx={1} width='75%' style={{ color: '#c9bfbf' }}>
								{v.review}
							</Typography>
						</Box>
					}
					)}
				</Stack>

				<Footer />
			</Stack>}
		</>
	)
}

export default Reviews
