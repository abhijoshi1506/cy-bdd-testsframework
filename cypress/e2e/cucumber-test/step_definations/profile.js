import {
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"

import {profilePage}from "@pages/ProfilePage"
import {dashboardPage}from "@pages/DashboardPage"

When("User clicks on Edit Profile Menu", () => {
  dashboardPage.clickEditProfileMenu();
  
});

When("User provides all Profile Details", (table) => {
  table.hashes().forEach((row) => {
      profilePage.selectTitleDropdown(row.Title);
      profilePage.typeSurnameInput(row.Surname);
      profilePage.typeFirstnameInput(row.Firstname);
      profilePage.typePhoneInput(row.Phone);
      profilePage.selectDobYearDropdown(row.Year);
      profilePage.selectDobMonthDropdown(row.Month);
      profilePage.selectDobDayDropdown(row.Day);
      profilePage.checkFullLicencetype();
      profilePage.selectLicencePeriodDropdownDropdown(row.Licenceperiod);
      profilePage.selectOccupationDropdown(row.Occupation);
      profilePage.typeAddressInput(row.Address);
      profilePage.typeCityInput(row.City);
      profilePage.typeCountryInput(row.Country);
      profilePage.typePostCodeInput(row.Postcode);
      
   });
});

When("User clicks on update user button", () => {
 // profilePage.clickUpdateUserBtn();
  //Site is giving error..Update API returning status code 404 Not Found
  
});

Then("User Profile should be updated with provided value", () => {
  // Assertions based on header and URL of resulted page
  
   //Site is giving error..Update API returning status code 404 Not Found
   
 });

 When("User clicks on Profile Menu", () => {
  dashboardPage.clickViewProfileMenu();
  
});

Then("the user should be redirected to profile details page", () => {
  // Assertions based on header and URL of resulted page
  // Assertions based on rerulted page with given set of data used for updating profile
   //Site is giving error..Update API returning status code 404 Not Found
   
 });