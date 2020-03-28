describe("Journalist can", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/articles",
      response: "fixture:create_article_response.json"
    })
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_login.json",
      headers: {
        uid: "user@mail.com",
      }
    })
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token?uid=user@mail.com",
      response: "fixture:journalist_login.json",
      headers: {
        uid: "user@mail.com",
      }
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Login")
        .click();
    });
  });


  it("Create Premium article", () => {
    cy.get("button").contains("Create Article").click()
    cy.get(".create-article").within(() => {
      cy.get(".title").type("Sweden vs Germany")
      cy.get(".teaser").type("The Corona crisis of Europe")
      cy.get(".content").type("Sweden should follow Germany's example during the Corona Crisis")
      cy.get('#premium').check({ force: true })
      cy.get("button").contains("Submit").click()
    });
    cy.get(".message").should("contain", "Your article is ready for review.")
  });

  it("Create Free Article", () => {
    cy.get("button").contains("Create Article").click()
    cy.get(".create-article").within(() => {
      cy.get(".title").type("Sweden vs Germany")
      cy.get(".teaser").type("The Corona crisis of Europe")
      cy.get(".content").type("Sweden should follow Germany's example during the Corona Crisis")
      cy.get("button").contains("Submit").click()
    });
    cy.get(".message").should("contain", "Your article is ready for review.")
  });
});