describe('Make Appointment', () => {
  it('Verify user can make appointment', () => {

    //login
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.wait(1000);
    cy.get("#btn-make-appointment").click();
    cy.wait(2000);
    cy.get("#txt-username").type("John Doe");
    cy.wait(2000);
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.wait(2000);
    cy.get("button[type='submit']").click();

    // verify expected result
    cy.get("h2").should("contain", "Make Appointment");

    //fill appointment
    cy.wait(1000);
    cy.get('select').select('Seoul CURA Healthcare Center');
    cy.wait(2000);
    cy.get('[type="checkbox"]').check();
    cy.wait(2000);
    cy.get('[type="radio"]').check('Medicaid');
    cy.wait(2000);
    cy.get('#txt_visit_date').type('31/10/2024');
    cy.wait(2000);
    cy.get('#txt_comment').type("jam 09.00 yaa");
    cy.wait(5000);
    cy.get("button[type='submit']").click();

    // verify expected result
    cy.get("h2").should("contain", "Appointment Confirmation");

  });
});