import React, { useEffect, useState } from 'react'
import { Stack, Avatar, Typography, Box, TextField, Button, Divider, IconButton } from '@mui/material'
import RedDivider from '../global/RedDivder'
import { Delete, Send } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { addReview, getReviews, removeReview } from '../../api_client/axiosClient'
import Cookies from 'js-cookie'

export const makeDate = (dateString) => {
	const day = new Date(dateString).getDate()
	const month = new Date(dateString).getMonth()
	const year = new Date(dateString).getFullYear()
	const date = `${day}-${month}-${year}`
	return date
}

const Review = () => {
	const location = useLocation()
	let mediaType = location.pathname.split('/')[2]
	const mediaId = location.pathname.split('/')[3]
	const [review, setReview] = useState('')
	const [username, setUsername] = useState(Cookies.get('username'))
	const [reviews, setReviews] = useState([])

	if (mediaType == 'series') mediaType = 'tv'

	useEffect(() => {
		const intervalId = setInterval(() => {
			const updatedUsername = Cookies.get('username');
			if (username !== updatedUsername) {
				setUsername(updatedUsername)
			}
		}, 500)

		return () => {
			clearInterval(intervalId)
		}
	}, [username])

	useEffect(() => {
	  getReviews(mediaType, mediaId).then(response => {
		setReviews(response.data)
	  })
	}, [])
	


	return (
		<Stack spacing={2} mx={10}>

			<Stack>
				<Typography fontSize={35} fontWeight={600} color="white" ml={1}>Reviews</Typography>
				<RedDivider />
			</Stack>
			{reviews.map((v, i) => <Stack key={v._id} direction='row' spacing={2}>
				<Box style={{ marginLeft: "10px" }}>
					<Avatar color='secondary'>
						{v.username[0]}
					</Avatar>
				</Box>

				<Stack spacing={1}>
					
					<Typography color="white">{v.username.charAt(0).toUpperCase() + v.username.slice(1).toLowerCase()}</Typography>
					<Stack direction='row' spacing={2}>
						<Typography color="white">{makeDate(v.createdAt)}</Typography>
						{ username && <Button onClick={() => {
							removeReview(v._id).then(res=>{
								
								console.log(res.data);
								getReviews(mediaType, mediaId).then(response => {
									setReviews(response.data);
								})
							})
						}} 
						startIcon={<Delete color='error'/>} style={{margin: 0, padding: 0, translate: '0px -1px'}}>
						</Button>}
					</Stack>
					<Typography color="white">{v.review}</Typography>
					<Divider light />
				</Stack>
			</Stack>)
			}
			{username && <Stack direction='row' spacing={3} style={{ marginLeft: '10px' }}>
				<TextField
					id="outlined-multiline-static"
					placeholder='What do you think about this show?'
					multiline
					sx={{ backgroundColor: '#555353', width: "60%", borderRadius: '8px', margin: '0 10px', color: 'white' }}
					InputLabelProps={{
						sx: { color: 'whitesmoke', opacity: '0.6' }
					}}
					inputProps={{
						sx: { color: 'white' }
					}}
					rows={4}
					color='common'
					value={review}
					onChange={(e) => setReview(e.target.value)}
				/>

				<Button startIcon={<Send />} style={{ backgroundColor: 'red', color: 'white', height: '20%' }} onClick={() => {
					if (review) {
						addReview(mediaType, mediaId, review).then((res) => {
							setReview('')
							getReviews(mediaType, mediaId).then((response)=>setReviews(response.data))
						})
					}
				}}>
					<Typography variant="h6" fontWeight={600}>POST</Typography>
				</Button>
			</Stack>}

		</Stack>
	)
}

export default Review
