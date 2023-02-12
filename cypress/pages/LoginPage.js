class LoginPage {
    elements = {
      usernameInput: () => cy.get("#email"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-form > div:nth-child(3) > input"),
      errorMessage: () => cy.get('#login-form > div:nth-child(2) > span > b'),
            
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
     
    submitLogin(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }
  }
  
  export const loginPage = new LoginPage();