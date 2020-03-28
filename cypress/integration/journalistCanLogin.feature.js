describe("Journalist authenticates", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_login.json",
      headers: {
        uid: "user@mail.com",
        token: "ixQJyGKqovMs6ngyR8EmqQ"
      }
    })
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Login")
        .click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });
});