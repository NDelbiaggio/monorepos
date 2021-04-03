describe('reusable-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));

  it('should render the component', () => {
    cy.get('monorepos-header').should('exist');

    cy.get('input').type('Nx is quite cool');
  });
});
