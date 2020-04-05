describe("Journalist authenticates", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_login.json",
      headers: {
        uid: "journalist@mail.com"
      }
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token?uid=journalist@mail.com",
      response: "fixture:journalist_login.json",
      headers: {
        uid: "journalist@mail.com"
      }
    });
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Login")
        .click();
    });
    cy.get("#message").should("contain", "Hello journalist@mail.com");
  });

  it("and also logout", () => {
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Login")
        .click();
    });
    cy.get("#message").should("contain", "Hello journalist@mail.com");
    cy.get("#login-form").should("not.exist");
    cy.get("button")
      .contains("Logout")
      .click();
    cy.get("#login-form").should("exist");
    cy.get("#email").type("now we are logged out");
  });
});
