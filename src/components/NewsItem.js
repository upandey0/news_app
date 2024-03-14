import React from 'react';

const NewsItem = (props) => {
	let { title, description, imageUrl, newsUrl, author, date, sourceName } =
		props;
	return (
		<div className='my-3'>
			<div className='card'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						position: 'absolute',
						right: '0',
					}}
				>
					<span className='position-absolute top-0 translate-middle badge rounded-pill bg-info'>
						{sourceName}
					</span>
				</div>
				<img
					src={
						!imageUrl
							? 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/eye-health-1701602610.jpg'
							: imageUrl
					}
					className='card-img-top'
					style={{ height: '16rem' }}
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{description}</p>
					<p className='card-text'>
						<small className='text-body-secondary'>
							By {!author ? 'unknown' : author} on{' '}
							{new Date(date).toUTCString()}
						</small>
					</p>
					<a
						rel='noreferrer'
						href={newsUrl}
						target='_blank'
						className='btn btn-sm btn-dark'
						style={{ cursor: 'pointer' }}
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
