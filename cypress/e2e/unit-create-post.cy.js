describe("Unit test, logges in and creates new post", () => {
  let email = "marthe@noroff.no";
  let password = "Noroff2022";
  let title = "This is a test";
  let body = "This is the tests content";

  it("Logges in and posts new post", () => {
    cy.visit("/");

    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);

    cy.createPost(title, body).then((post) => {
      expect(post.id).to.not.to.be.undefined;
    });
  });
});
