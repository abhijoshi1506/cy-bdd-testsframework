import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"

  import {loginPage} from '@pages/LoginPage'
  
  Given("A web browser is at the guru99 Insurance login page", () => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
  });
  
  When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)
    
  });
  
  When("A user provides incorrect credentials, and clicks on the login button", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password)
  
    });
  });
  Then("the url should contains the header page", () => {
    cy.url().should("contains", "https://demo.guru99.com/insurance/v1/header.php");
  });
  Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
  });