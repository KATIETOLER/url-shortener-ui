import React, { Component } from 'react'
import './App.css'
import fetchData from '../../apiCalls'
import UrlContainer from '../UrlContainer/UrlContainer'
import UrlForm from '../UrlForm/UrlForm'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			urls: [],
			error: '',
		}
	}

	componentDidMount() {
		fetchData
			.getUrls()
			.then((data) => this.setState({ urls: data.urls }))
			.catch((error) => this.setState({ error: error.message }))
	}
	addUrl = (newUrl) => {
		fetchData
			.postUrl(newUrl)
			.then((response) => {
				if (response.status === 404) {
					this.setState({ error: 'Page not found' })
					console.log(this.state.error)
				} else if (!response.ok) {
					this.setState({ error: 'Something has gone wrong, try again later!' })
				} else {
					response.json()
				}
			})
			.then(() => {
				fetchData.getUrls().then((data) => this.setState({ urls: data.urls }))
			})
	}
	render() {
		return (
			<main className='App'>
				<header>
					<h1>URL Shortener</h1>
					<UrlForm addUrl={this.addUrl} />
				</header>
				{this.state.error && (
					<h2 id='error'>Oh no! Something went wrong, try again!</h2>
				)}

				{this.state.urls && <UrlContainer urls={this.state.urls} />}
			</main>
		)
	}
}

export default App
