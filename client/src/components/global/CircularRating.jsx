import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const CircularRating = ({ rating, size }) => {
	return (
		<div style={{
			width: `${size}px`,
			translate: '0px -10px'
		}}>
			<CircularProgressbar value={Number(rating * 10)} text={rating} styles={buildStyles({
				textColor: 'white',
				trailColor: 'white',
				pathColor: 'green',
				textSize: '2rem'

			})} />
		</div>
	)
}

export default CircularRating
