describe("Unit test, logges in and logges out", () => {
  let email = "marthe@noroff.no";
  let password = "Noroff2022";

  it("Returnes valid token when provided with valid credentials ", () => {
    cy.visit("/");

    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });

  it("Removed token when logges out ", () => {
    cy.visit("/");

    cy.logout();
    cy.removeLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
