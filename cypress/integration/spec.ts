context('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('React Typescript App', () => {
    it('shows welcome message', function() {
      cy.get('p')
        .should('be.visible')
        .and('have.text', 'Webpack + TypeScript + React = ❤️')
    })

    it('tries cypress test', function() {
      cy.findAllByText('Webpack + TypeScript + React = ❤️').should('exist')
    })
  })
})
