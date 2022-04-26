const fetchData = {
	getUrls() {
		return fetch('http://localhost:3001/api/v1/urls').then((response) =>
			response.json()
		)
	},
	postUrl(newUrl) {
		return fetch('http://localhost:3001/api/v1/urls', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				long_url: newUrl.long_url,
				title: newUrl.title,
			}),
		})
	},
}

export default fetchData
