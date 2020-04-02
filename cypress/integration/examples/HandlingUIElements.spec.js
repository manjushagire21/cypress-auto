describe('UI elements', function()
{

    it('verify the text',function()
    {
cy.visit('http://newtours.demoaut.com/')
cy.url().should('include','newtours')

cy.title().should('eq','Welcome: Mercury Tours')


    })
})