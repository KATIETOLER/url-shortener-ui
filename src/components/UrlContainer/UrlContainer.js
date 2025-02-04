import React from 'react'
import './UrlContainer.css'

const UrlContainer = ({ urls }) => {
	const urlCards = urls.map((url) => {
		return (
			<div className='url' id={url.id} key={url.id}>
				<h3>{url.title}</h3>
				<a href={url.short_url} target='blank' id='shortURL'>
					{url.short_url}
				</a>
				<p>{url.long_url}</p>
			</div>
		)
	})

	return (
		<section className='url-container'>
			{urlCards.length ? urlCards : <p>No urls yet! Find some to shorten!</p>}
		</section>
	)
}

export default UrlContainer
