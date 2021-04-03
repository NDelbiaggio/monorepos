import { getGreeting } from '../support/app.po';

describe('monorepos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('input').type('hello cypress!');
  });
});
