/// <reference types="cypress"/>

describe('Validar formulario', () => {

    it('Click al boton del formulario', () =>{
        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]').submit();

        cy.get('[data-cy="alerta"]').invoke('text').should('equal', 'Todos los campos son Obligatorios');

        cy.get('[data-cy="alerta"]').should('have.class', 'alert-danger');

    });

});