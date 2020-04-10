
describe('Fixtures', function () {
	before(function () {

		cy.log('This is set up block')
		{
			cy.fixture('example.json').then(function (data) {
				this.data = data
			})
		}
	})

	it('Fixtures Demo Test', function () {

		cy.visit('https://admin-demo.nopcommerce.com/login')
		cy.get('input[name=Email]').type(this.data.email)
		cy.get('input[name=Password]').type(this.data.password)
		cy.get('input[type=submit]').click

	})
})
