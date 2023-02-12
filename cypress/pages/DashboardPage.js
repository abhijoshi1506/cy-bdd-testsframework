class DashboardPage {
    elements = {
      editProfileMenu: () => cy.get("#ui-id-5"),
      viewProfileMenu: () => cy.get("#ui-id-4"),
      requestQuotationMenu: () => cy.get('#ui-id-2'),
      retriveQuotationMenu: () => cy.get('#ui-id-3'),
      logoutBtn: () => cy.get("body > div.content > form > input"),
    };
  
    clickEditProfileMenu() {
      this.elements.editProfileMenu().click();
    }
    
    clickViewProfileMenu() {
      this.elements.viewProfileMenu().click();
    }
    
    clickRequestQuotationMenu() {
      this.elements.requestQuotationMenu().click();
    }
    
    clickRetriveQuotationMenu() {
      this.elements.retriveQuotationMenu().click();
    }

    clickLogout() {
      this.elements.logoutBtn().click();
    }
    
  }
  
  export const dashboardPage = new DashboardPage();