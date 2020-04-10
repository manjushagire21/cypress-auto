describe('login', function () {
    beforeEach(function () {
        cy.visit('https://reviews.soundalliance.ca/')
        cy.contains('Sign')
    })
    it('verify blank fields', function () {
        cy.get('input[name=email]')
        cy.get('input[name=password]')
        cy.get('button[type=submit]').click()

    })
    it('verify the valid email address and password field', function () {
        cy.get('input[name=email]').type('XYZ')
        cy.get('input[name=password]').type('ABC')
        cy.get('button[type=submit]').click()

    })
    it('login succefully', function () {
        cy.get('input[name=email]').type('manjushag@zlucksolutions.com')
        cy.get('input[name=password]').type('manjusha1994')
        cy.get('button[type=submit]').click()


        cy.title().should('eq', 'Customer Review')
    })
})
