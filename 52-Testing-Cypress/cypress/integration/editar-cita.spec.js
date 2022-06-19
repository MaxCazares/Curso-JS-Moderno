/// <reference types="cypress"/>

describe('Escribir en el formulario', () => {

    it('Crear una cita', () =>{
        cy.visit('/index.html');
    
        cy.get('[data-cy="mascota-input"]').type('poppy');
        cy.get('[data-cy="propietario-input"]').type('Valeria');
        cy.get('[data-cy="telefono-input"]').type('0123456789');
        cy.get('[data-cy="fecha-input"]').type('2022-01-16');
        cy.get('[data-cy="hora-input"]').type('10:30');
        cy.get('[data-cy="sintomas-input"]').type('solo duerme');
        cy.get('[data-cy="crear-cita"]').click();

    });

    it('Edita la cita', () =>{
        cy.get('[data-cy="editar"]').click();
        cy.get('[data-cy="sintomas-input"]').clear().type('solo duerme y no come');
        cy.get('[data-cy="crear-cita"]').click();

        cy.get('[data-cy="alerta"]').invoke('text').should('equal', 'Guardado Correctamente');
    });
});