describe('Hooks', function() 
{
    before(function() {
      
      cy.log('This is set up block')  
    })
  
    after(function() {
      cy.log('This is Tear down block')  
    })
  
    beforeEach(function() {
      cy.log('This is login block')
    })
  
    afterEach(function() {
        cy.log('This is logout  block')
    })

    it('Searchig', function()
    {
        cy.log('This is searching test')   
     })
     it('Advance Searchig', function()
    {
        cy.log('This is Advance searching test')   
     })
     it('listing products', function()
    {
        cy.log('This is listing product test')   
     })
    })