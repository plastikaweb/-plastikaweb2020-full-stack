import { getGreeting } from '../support/app.po';

describe('plastikaweb-full-stack', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to plastikaweb-full-stack!');
  });
});
