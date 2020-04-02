describe('Custom commands', function()
 {
  it('Testlogin', function() 
  {
   cy.login(' admin@yourstore.com','admin')   //valid

    cy.title().should('be.equal','Dashboard / nopCommerce administration')

    cy.login(' admin@yourstore.com','admin1')  //invalid

    cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

    cy.login(' admin@yourstore1.com','admin') //invalid

    cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

cy.log('login')

  })

  it('Add customer', function() 

  {
    cy.login(' admin@yourstore.com','admin')

    cy.log('Add cutomer')
  })

  it('search', function() 
  {
    cy.login(' admin@yourstore.com','admin')

    cy.log('serach')
  })
})