// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('React Typescript App', () => {
    it('shows main link', function() {
      cy.get('p')
        .should('be.visible')
        .and('have.text', 'Webpack + TypeScript + React = ❤️')
    })
  })
})
