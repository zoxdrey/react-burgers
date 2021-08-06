describe('dnd bun work', function () {
    it('should dnd working', function () {
        cy.visit('http://localhost:3000');
        cy.get('img[class^="burger-ingredients-card"]').first().trigger("dragstart");

        cy.get('div[class^="burger-constructor-list_burger-constructor-list__scroll-area"]').first()
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");

        cy.get('div[class^="constructor-element constructor-element_pos_top"]').first().should('be.exist');
        cy.get('span[class^="constructor-element__text"]').first().contains('Краторная булка N-200i (верх)');
        cy.get('span[class^="constructor-element__text"]').last().contains('Краторная булка N-200i (низ)');
    });
});

describe('dnd item work', function () {
    it('should dnd working', function () {
        cy.visit('http://localhost:3000');

        cy.get('div[class^="burger-ingredients-list"]').scrollIntoView()
        cy.get('img[alt^="Соус фирменный Space Sauce"]').trigger("dragstart");

        cy.get('div[class^="burger-constructor-list_burger-constructor-list__scroll-area"]').first()
            .trigger("dragenter")
            .trigger("dragover")
            .trigger("drop")
            .trigger("dragend");

        cy.get('div[class^="constructor-element"]').first().should('be.exist');
        cy.get('div[class^="constructor-element"]').find('span[class^="constructor-element__text"]').contains('Соус фирменный Space Sauce');
    });
});