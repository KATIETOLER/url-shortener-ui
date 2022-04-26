describe('Url-Shortener', () => {
	it('When a user visits the page, they can view the page title s', () => {
		cy.intercept('http://localhost:3001/api/v1/urls', { fixture: 'urls.json' })
		cy.visit('http://localhost:3000/')
		cy.get('.App').get('h1').contains('URL Shortener')
	})

	it('When a user visits the page, they can view the existing shortened URLs', () => {
		cy.intercept('http://localhost:3001/api/v1/urls', { fixture: 'urls.json' })
		cy.visit('http://localhost:3000/')
		cy.get('.App')
			.get('.url')
			.get('.url-container')
			.get('.url')
			.eq(0)
			.contains('Awesome photo')
	})

	it('When a user visits the page, they should be able to view the Form with the proper inputs', () => {
		cy.intercept('http://localhost:3001/api/v1/urls', { fixture: 'urls.json' })
		cy.visit('http://localhost:3000/')
		cy.get('.form').get('#title').should('be.visible')
		cy.get('.form').get('#longURL').should('be.visible')
	})

	it('When a user fills out the form, the information should be reflected in the input fields', () => {
		cy.get('.form').get('#title').type('coolest image of a cow')
		cy.get('.form')
			.get('#longURL')
			.type(
				'https://i.pinimg.com/originals/5a/69/ba/5a69baacae4ad087da35b2b594b06edf.jpg'
			)
	})

	it('should show a new shortened URL after a user fills out and submits the form', () => {
		cy.get('.form').get('#submit').click()
	})

	it('should show the new card after submission ', () => {
		cy.wait(2000)
		cy.get('.App')
			.get('.url')
			.get('.url-container')
			.get('.url')
			.eq(1)
			.contains('coolest image of a cow')
	})
	it('should show the new card  with a shortened url', () => {
		cy.wait(1000)
		cy.get('.App')
			.get('.url')
			.get('.url-container')
			.get('.url')
			.eq(1)
			.contains('http://localhost:3001/useshorturl/2')
	})
	it('should only show the submission button if both input fields are filled in', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.form').get('#submit').should('not.exist')
		cy.get('.form').get('#title').type('coolest image of a cow')
		cy.get('.form')
			.get('#longURL')
			.type(
				'https://i.pinimg.com/originals/5a/69/ba/5a69baacae4ad087da35b2b594b06edf.jpg'
			)
		cy.get('.form').get('#submit').should('exist')
	})
})

// * When a user visits the page, they can view the page title and the existing shortened URLs
// * When a user visits the page, they can view the Form with the proper inputs
// * When a user fills out the form, the information is reflected in the input fields
// When a user fills out and submits the form, the new shortened URL is rendered

// - What should happen if the server sends back a failed request?
// - What should happen if the user tries to submit an incomplete form?
