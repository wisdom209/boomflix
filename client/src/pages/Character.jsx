import React from 'react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import { Typography, Stack, Button } from '@mui/material'
import ImageSwiper from '../components/home/ImageSwiper'
import RedDivider from '../components/global/RedDivder'

const Character = () => {
	return (
		<>
			<Header />

			<Stack>
				<Stack direction="row" spacing={5} margin="0px 100px" mt="100px" mb="100px"
					sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}
				>
					<img src="/jetli.jpeg" style={{
						width: '300px',
						height: '300px'
					}} />

					<Stack spacing={2}>
						<Typography color="white" variant="h4">Chris Pratt (1979)</Typography>

						<Typography color="white">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, maxime neque! Ratione repellendus nesciunt officiis quas quae vitae animi minima vero sit, officia consequuntur dicta aliquid earum. Alias, vitae aperiam.
						</Typography>
					</Stack>
				</Stack>

				<Stack>
					<Stack style={{ translate: '10px -20px' }}>
						<Typography variant='h4' fontWeight={700} color="white">MEDIA</Typography>
						<RedDivider />
					</Stack>

					<Stack spacing={0}>
						{Array(8).fill('_').map((v, i) => {
							if (i % 4 == 0) {
								return (<ImageSwiper key={i} />)
							}
						})}
					</Stack>

					<Stack mt={5}>
						<Button size='large' color="error">
							<Typography fontWeight={800}>Load More</Typography>
						</Button>
					</Stack>
				</Stack>
			</Stack >

			<Footer />
		</>
	)
}

export default Character
