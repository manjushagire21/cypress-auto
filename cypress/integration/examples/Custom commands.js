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

  it('Add Customer name ', function() 

  {
    cy.login(' admin@yourstore.com','admin')

    cy.log('Add Cutomer name')
  })

  it('search', function() 
  {
    cy.login(' admin@yourstore.com','admin')

    cy.log('serach')
  })
})