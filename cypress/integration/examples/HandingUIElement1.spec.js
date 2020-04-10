describe('UI elements', function()
{

    it('verify hobbies check boxes',function() 
    {
cy.visit('http://demo.automationtesting.in/Register.html')
cy.url().should('include','demo')

cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') 
cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies') 
cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey') 

cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket') 
cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value','Movies') 
cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey') 

cy.get('input[type=checkbox]').check(['Cricket','Hockey']) 


    })

    it('Skills Drop Down',function()
    {

cy.get('#Skills').select('Android').should('have.value','Android')
    })


    it('Language Multi Selector',function()
    {

cy.get('#msdd').click()
cy.get('.ui-corner-all').contains('English').click()
cy.get('.ui-corner-all').contains('Urdu').click()


})

it('Language selector',function()
{

cy.get('[role=combobox]').click( {force : true })
cy.get('.select2-search__field').type('India').type ('{enter}')





})

})
