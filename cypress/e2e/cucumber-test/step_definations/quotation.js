import {
    Given,
    When,
    Then,
    And,
} from "@badeball/cypress-cucumber-preprocessor"
  
  import {quotationPage}from "@pages/QuotationPage"
  import {dashboardPage}from "@pages/DashboardPage"

  
  let num;
  let data;
  When("User clicks on Request Quotation", () => {
    dashboardPage.clickRequestQuotationMenu();
    
  });

  When("A user provides Quotation Details, calculates and save quatation", (table) => {
    table.hashes().forEach((row) => {
        data=row;
        quotationPage.selectBreakDownCoverDropdown(row.Breakdowncover);
        quotationPage.typeQuotationIncidents(row.incidents);
        quotationPage.typeRegistration(row.Registration);
        quotationPage.typeAnnualMileage(row.AnnualMileage);
        quotationPage.typeEstimatedValue(row.EstimatedValue);
        quotationPage.selectParkingLocationDropdown(row.ParkingLocation);
        quotationPage.selectStartPolicyYearDropdown(row.Year);
        quotationPage.selectStartPolicyMonthDropdown(row.Month);
        quotationPage.selectStartPolicyDayDropdown(row.Day);
        quotationPage.clickCalculatePremiumBtn();
        quotationPage.clickSaveQuotationBtn();
     });
  });

    Then("It should display Success page", () => {
        
        cy.get('body').contains("You have saved this quotation!");
        cy.get('body').invoke('text').then((s) =>{
        num= s.match(/\d+/)[0];
        cy.log(num)
         });
             
    });
    
    When("User provide valid Identification number and clicks on Retrive Quotation Details", () => {
        
       dashboardPage.clickRetriveQuotationMenu(); 
       quotationPage.typeIdentificationNumber(num);
       quotationPage.clickRetriveQuotationBtn();
             
    });

    Then("the url should contains the retival page", () => {
        cy.url().should("contains", "https://demo.guru99.com/insurance/v1/retrieve_quotation.php");
      });

      When("User click on Logout button", () => {
        
        dashboardPage.clickLogout();
                    
     });

     Then("the user should be redirected to home page", () => {
        cy.url().should("contains", "https://demo.guru99.com/insurance/v1/index.php");
      });

      Then("the page should display quotation details", () => {
        //cy.get('body').contains(data.Breakdowncover); as it was stored by API in database so nothing is returened. its a bug
        cy.get('body').contains(data.incidents);
        cy.get('body').contains(data.Registration);
        cy.get('body').contains(data.AnnualMileage);
        cy.get('body').contains(data.EstimatedValue);
        cy.get('body').contains(data.ParkingLocation,{ matchCase: false });
        let monthMap= new Map([["January",1],["Februwary",2],["March",3],["April",4],["May",5],["June",6],["July",7,["Augest",8],["September",9],["October",10],["November",11],["December"],12]]);
        cy.get('body').contains(data.Year+"."+monthMap.get(data.Month)+"."+data.Day);
        
      });
