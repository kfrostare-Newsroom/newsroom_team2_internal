describe("Journalist authenticates", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("successfully with valid credentials", () => {
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get('button').contains('Login').click()
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });
})