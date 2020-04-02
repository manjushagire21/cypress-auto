describe('TestSuite1', function()
 {
  it('Verify Title Of The Page', function() 
  {
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')

  })
})
