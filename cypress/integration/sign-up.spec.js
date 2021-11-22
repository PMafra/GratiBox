import faker from 'faker';
import { cpf } from 'cpf-cnpj-validator';

describe('Sign-up', () => {
  it('Should sign-up sucessfully', () => {
    cy.visit('http://localhost:3000/sign-up');
    cy.get('input[placeholder=Name]').type(faker.name.findName());
    cy.get('input[placeholder=E-mail]').type(faker.internet.email());
    cy.get('input[placeholder=CPF]').type(cpf.generate());
    cy.get('input[placeholder=Password]').type('Gratibox123@');
    cy.get('input[placeholder="Password confirmation"]').type('Gratibox123@');

    cy.contains('Sign-up').click();

    cy.get('#display-message').should(($message) => {
      expect($message).to.contain('Account created successfully!');
    });
  });
});
