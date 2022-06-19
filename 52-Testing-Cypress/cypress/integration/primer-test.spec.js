/// <reference types="cypress"/>

// para ejecutarlo necesitas node.js
// comando para ejecutar la aplicación de escritorio: npx cypress open 
// comando para ejecutar la apliación en la cli: npx cypress run

describe('Carga la pagina principal', () => {
    it('Carga la pagina principal', () => {

        cy.visit('/index.html');

        // Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // Verificar que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equals', 'Administrador de Pacientes de Veterinaria')

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')
    });
});