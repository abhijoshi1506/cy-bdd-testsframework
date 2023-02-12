class ProfilePage {
  
    elements = {
      titleDropdown: () => cy.get("#user_title"),
      surnameInput: () => cy.get("#user_surname"),
      firstnameInput: () => cy.get("#user_firstname"),
      phoneInput: () => cy.get('#user_phone'),
      fullLicenceType: () => cy.get('#user_licencetype_t'),
      licencePeriodDropdown: () => cy.get('#user_licenceperiod'),
      dobYearDropdown: () => cy.get('#user_dateofbirth_1i'),
      dobMonthDropdown: () => cy.get('#user_dateofbirth_2i'),
      dobDayDropdown: () => cy.get('#user_dateofbirth_3i'),
      cityInput: () => cy.get("#user_address_attributes_city"),
      occupationDropdown: () => cy.get('#user_occupation_id'),
      addressInput: () => cy.get("#user_address_attributes_street"),
      countryInput: () => cy.get("#user_address_attributes_county"),
      postCodeInput : ()=> cy.get("#user_address_attributes_postcode"),
      updateUserBtn: () => cy.get("input[value='Update User']"),
    };
  
    selectTitleDropdown(titleDropdownValue) {
      this.elements.titleDropdown().select(titleDropdownValue);
    }
  
    typeSurnameInput(surnameInputValue) {
      this.elements.surnameInput().type(surnameInputValue);
    }

    typeFirstnameInput(firstnameInputValue) {
      this.elements.firstnameInput().type(firstnameInputValue);
    }

    typePhoneInput(phoneInputValue) {
      this.elements.phoneInput().type(phoneInputValue);
    } 

    checkFullLicencetype() {
      this.elements.fullLicenceType().check();
    }
   
    selectLicencePeriodDropdownDropdown(licencePeriodDropdownValue) {
      this.elements.licencePeriodDropdown().select(licencePeriodDropdownValue);
    }

    selectDobYearDropdown(dobYearDropdownValue) {
      this.elements.dobYearDropdown().select(dobYearDropdownValue);
    }

    selectDobMonthDropdown(dobMonthDropdowneValue) {
      this.elements.dobMonthDropdown().select(dobMonthDropdowneValue);
    }

    selectDobDayDropdown(dobDayDropdownValue) {
      this.elements.dobDayDropdown().select(dobDayDropdownValue);
    }

    typeCityInput(cityInputValue) {
      this.elements.cityInput().type(cityInputValue);
    }

    selectOccupationDropdown(occupationDropdownValue) {
      this.elements.occupationDropdown().select(occupationDropdownValue);
    }

    typeAddressInput(addressInputValue) {
      this.elements.addressInput().type(addressInputValue);
    }

    typeCountryInput(countryInputValue) {
      this.elements.countryInput().type(countryInputValue);
    }
   
    typePostCodeInput(postCodeInputValue) {
      this.elements.postCodeInput().type(postCodeInputValue);
    }

    clickUpdateUserBtn(){
      this.elements.updateUserBtn().click();
    }
  }
  
  export const profilePage = new ProfilePage();