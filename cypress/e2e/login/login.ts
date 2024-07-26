import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/");
});

When(
  "I enter the username {string} and password {string}",
  (username: string, password: string) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get("button[type='submit']").click();
  }
);

Then("I should see a {string}", (message: string) => {
  cy.contains(message).should("be.visible");
});

Then("I should be navigated to {string}", (page: string) => {
  cy.url().should("include", page);
});
