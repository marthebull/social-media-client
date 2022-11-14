describe("Unit test, logges inn and gets token", () => {
  let email = "marthe@noroff.no";
  let password = "Noroff2022";

  it("Returnes valid token when provided with valid credentials ", () => {
    cy.visit("/");

    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });
});
