import React, { useEffect, useRef, useState } from 'react';
import classes from './ImageList.module.css';

const ImageList = ({ images }) => {
	return (
		<div className={classes.card}>
			{images.map((image) => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
};

function ImageCard({ image }) {
	const [spans, setSpans] = useState(0);
	const imageRef = useRef();
	useEffect(() => {
		const handleSpan = () => {
			const height = imageRef.current.clientHeight;
			const spans = Math.ceil(height / 10);
			setSpans(spans);
		};

		imageRef.current.addEventListener('load', handleSpan);

		return () => {
			window.removeEventListener('load', handleSpan);
		};
	}, []);
	return (
		<div style={{ gridRowEnd: `span ${spans}` }}>
			<div>
				<img
					ref={imageRef}
					key={image.id}
					src={image.urls.regular}
					alt={image.description}
				/>
			</div>
		</div>
	);
}
export default ImageList;
