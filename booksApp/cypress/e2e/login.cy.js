/* eslint-disable no-undef */

describe('login process', () =>{
  
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("/");

    
  },
  
)

it("Should successfully login", () => {
  cy.login('test@test.com', 'test')
  cy.contains("Добро пожаловать test@test.com").should("be.visible")
});

it("Shows error in case empty login", () => {
  cy.login(null, 'test')
  cy.get('#mail').then((elements) => elements[0].checkValidity())
  .should('be.false')
  cy.get('#mail').then((elements) => elements[0].validationMessage)
  .should('contain', 'Заполните это поле.')
  })

it("Shows error in case empty password", () => {
  cy.login('test@test.com', null)

  cy.get('#pass').then((elements) => elements[0].checkValidity())
  .should('be.false')
  cy.get('#pass').then((elements) => elements[0].validationMessage)
  .should('contain', 'Заполните это поле.')
  })


it("Adding a book to favorites", () => {
  cy.login('test@test.com', 'test')
  cy.addBook('Dune')
  cy.get('h4').click()
  cy.contains("Dune").should("be.visible")
})

it("Shows error in case empty title", () => {
  cy.login('test@test.com', 'test')
  cy.addBook(null)
  cy.get('#title').then((elements) => elements[0].checkValidity())
  cy.get('#title').then((elements) => elements[0].validationMessage)
  .should('contain', 'Заполните это поле.')
})

it("Remove a book from Favorites", () => {
  cy.login('test@test.com', 'test')
  cy.addBook('Dune')
  cy.contains('Delete from favorite').click()
  cy.get('h4').click()
  cy.contains('Dune').should('not.exist')
})

})









