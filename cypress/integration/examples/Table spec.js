 
describe('Tables', function()
{

 it('Verify table element', function() 
 {
//Check value presence anywhere in the table.
   cy.visit('http://testautomationpractice.blogspot.com/')
   cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
 


//Check Value presence in specific row and column.
   cy.get('table[name=BookTable] >tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

   

    })
   })

