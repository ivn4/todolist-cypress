/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/vanillajs/');
        cy.get('.new-todo').type('Task 1{enter}');
        cy.get('.new-todo').type('Task 2{enter}');
        cy.get('.new-todo').type('Task 3{enter}');

        cy.get('.todo-list li:nth-child(2) .toggle').click();
    });

    it('should filter ACTIVE todos', () => {
        cy.contains('Active').click();

        cy.get('.todo-list li').should('have.length', 2);
    });
});