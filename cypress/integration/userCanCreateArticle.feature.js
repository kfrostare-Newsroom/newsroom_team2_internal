describe("Journalist can", () => {
  before(() => {
    cy.visit("/");
  });

  it("write in its article", () => {
    cy.get("button").contains("Create Article").click()
    cy.get(".create-article").within(() => {
      cy.get(".title").type("Sweden vs Germany");
      cy.get(".content").type("Sweden should follow Germany's example during the Corona Crisis")
    });
  });
});