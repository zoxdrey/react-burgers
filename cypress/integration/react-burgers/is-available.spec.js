describe('service is available', function () {
    it('should be available on localhost:3000', function () {
        cy.visit('http://localhost:3000');
    });
});

describe('service has valid title', function () {
    it('should has valid title', function () {
        cy.visit('http://localhost:3000');
        cy.title().should('eq', 'React Burger')
    });
});