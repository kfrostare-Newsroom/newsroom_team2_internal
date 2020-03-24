describe("Journalist can", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/articles",
      response: "fixture:create_article_response.json"
    })
  });

  it("write in its article", () => {
    cy.get("button").contains("Create Article").click()
    cy.get(".create-article").within(() => {
      cy.get(".title").type("Sweden vs Germany")
      cy.get(".teaser").type("The Corona crisis of Europe")
      cy.get(".content").type("Sweden should follow Germany's example during the Corona Crisis")
      cy.get(".premium-article").select("Premium")
      cy.get("button").contains("Submit").click()
    });
    cy.get(".message").should("contain", "Your article is ready for review.")
  });
});