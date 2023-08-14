import React from 'react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import { Typography, Stack, Button, Hidden, Box } from '@mui/material'
import ImageSwiper from '../components/home/ImageSwiper'
import RedDivider from '../components/global/RedDivder'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { buildImageUrl, getPerson, getPersonCredits } from '../api_client/axiosClient'
import { setPersonDetail } from '../redux/features/appSlice'
import { useLocation } from 'react-router-dom'


const Character = () => {
	const location = useLocation()
	/* const mediaId = 569094; */
	const personId = location.pathname.split('/')[3]  /* 587506; */
	const mediaType = location.pathname.split('/')[2]  /* 587506; */
	const dispatch = useDispatch()


	useEffect(() => {
		getPerson(personId).then(response => {
			const person_bio = response.data;
			getPersonCredits(`${mediaType}`, personId).then(res => {
				const person_credits = res.data
				dispatch(setPersonDetail({ person_bio, person_credits }))
			})
		})
	}, [])

	const person = useSelector(state => state.global.media.personDetail)

	return (
		<>
			{person == undefined || Object.keys(person).length != 2 ?
				<Loading />
				:
				<>
					<Header />

					<Stack>
						<Stack direction="row" spacing={5} margin="0px 100px" mt="100px" mb="100px"
							sx={{ flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap' } }}
						>
							<img src={buildImageUrl(person?.person_bio.profile_path)} style={{
								width: '100%',
								height: '400px',
								marginBottom: '20px'
							}} />

							<Stack spacing={2} style={{ translate: '-30px' }}>
								<Typography color="white" variant="h4">{person?.person_bio.name} ({person?.person_bio.birthday.slice(0, 4)})</Typography>

								<Typography color="white">
									{person?.person_bio.biography}
								</Typography>
							</Stack>
						</Stack>

						<Stack>
							<Stack style={{ translate: '10px -20px' }}>
								<Typography variant='h4' fontWeight={700} color="white">ALSO IN</Typography>
								<RedDivider />
							</Stack>

							<Hidden mdDown>
								<Stack spacing={0}>
									{person?.person_credits.cast.map((v, i) => {
										if (i % 4 == 0) {
											const mediaSubset = person?.person_credits.cast.slice(i, i + 4);
											return (<ImageSwiper key={i} media={mediaSubset} />)
										}
									})}
								</Stack>
							</Hidden>
							<Hidden mdUp>
								<Stack spacing={0}>
									{person?.person_credits.cast.map((v, i) => {

										if (i % 4 == 0) {
											const mediaSubset = person.person_credits.cast.slice(i, i + 4);
											return (<ImageSwiper key={i} media={mediaSubset} slides={2} />)
										}

									})}
								</Stack>
							</Hidden>

							{/* <Stack mt={5}>
								<Button size='large' color="error">
									<Typography fontWeight={800}>Load More</Typography>
								</Button>
							</Stack> */}
							<Box mb={2} />
						</Stack>
					</Stack >

					<Footer />
				</>
			}
		</>
	)
}

export default Character
