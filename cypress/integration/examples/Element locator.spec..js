describe('Locating Elements', function()
 {

  it('Verify types of lacator', function() 
  {

    cy.visit('https://demo.nopcommerce.com/')

    cy.get("#small-searchterms").type("Flower Girl Bracelet")

    cy.get("[type='submit']").click()

    cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

    cy.wait(3000)

    cy.get(".cart-label").click()

    cy.wait(3000)

    cy.get(".product-unit-price").contains('$360.00')

  })
})