import React, { Component } from 'react'

class UrlForm extends Component {
	constructor(props) {
		super()
		this.props = props
		this.state = {
			title: '',
			long_url: '',
		}
	}

	handleNameChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const newUrl = {
			id: Date.now(),
			...this.state,
		}
		this.props.addUrl(newUrl)
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({ title: '', long_url: '' })
	}

	render() {
		return (
			<form className='form'>
				<input
					type='text'
					placeholder='Title...'
					name='title'
					id='title'
					value={this.state.title}
					onChange={(e) => this.handleNameChange(e)}
				/>

				<input
					type='text'
					placeholder='URL to Shorten...'
					name='long_url'
					id='longURL'
					value={this.state.long_url}
					onChange={(e) => this.handleNameChange(e)}
				/>

				<button onClick={(e) => this.handleSubmit(e)}>Shorten Please!</button>
			</form>
		)
	}
}

export default UrlForm
