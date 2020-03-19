describe("Web app renders successfully (test)", () => {
  it("shows h1 element", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "NEWS STAFF LOGIN PAGE" );
  });
});