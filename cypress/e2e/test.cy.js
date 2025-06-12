describe.only('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url()
      .should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@mail.com')
    cy.get('.action-email')
      .should('have.value', 'fake@mail.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#password1').clear('1');
    cy.get('#password1').type('123454');
    cy.get('#fullName1').clear('21');
    cy.get('#fullName1').type('213124');
    cy.get('#description').clear('31');
    cy.get('#description').type('31');
    cy.get('#fullName1').click();
    cy.get('#fullName1').click();
    cy.get('#fullName1').clear('F');
    cy.get('#fullName1').type('Fam');
    cy.get('.action-form > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})