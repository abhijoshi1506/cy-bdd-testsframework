class QuotationPage {
  
    elements = {
      breakDownCoverDropdown: () => cy.get("#quotation_breakdowncover"),
      quotationIncidents: () => cy.get("#quotation_incidents"),
      registration: () => cy.get("#quotation_vehicle_attributes_registration"),
      annualMileage: () => cy.get('#quotation_vehicle_attributes_mileage'),
      estimatedValue: () => cy.get('#quotation_vehicle_attributes_value'),
      parkingLocationDropdown: () => cy.get('#quotation_vehicle_attributes_parkinglocation'),
      startPolicyYearDropdown: () => cy.get('#quotation_vehicle_attributes_policystart_1i'),
      startPolicyMonthDropdown: () => cy.get('#quotation_vehicle_attributes_policystart_2i'),
      startPolicyDayDropdown: () => cy.get('#quotation_vehicle_attributes_policystart_3i'),
      calculatePremiumBtn: () => cy.get(".btn-default"),
      saveQuotationBtn: () => cy.get("input[value='Save Quotation']"),
      identificationNumberInput : ()=> cy.get("input[placeholder='identification number']"),
      retriveQuotationBtn: () => cy.get("#getquote"),
    };
  
    selectBreakDownCoverDropdown(breakDownCoverDropdownValue) {
      this.elements.breakDownCoverDropdown().select(breakDownCoverDropdownValue);
    }
  
    typeQuotationIncidents(quotationIncidentsValue) {
      this.elements.quotationIncidents().type(quotationIncidentsValue);
    }

    typeRegistration(registrationValue) {
      this.elements.registration().type(registrationValue);
    }

    typeAnnualMileage(annualMileageValue) {
      this.elements.annualMileage().type(annualMileageValue);
    } 

    typeEstimatedValue(estimatedValueValue) {
      this.elements.estimatedValue().type(estimatedValueValue);
    }
   
    selectParkingLocationDropdown(parkingLocationDropdownValue) {
      this.elements.parkingLocationDropdown().select(parkingLocationDropdownValue);
    }

    selectStartPolicyYearDropdown(startPolicyYearDropdownValue) {
      this.elements.startPolicyYearDropdown().select(startPolicyYearDropdownValue);
    }

    selectStartPolicyMonthDropdown(startPolicyMonthDropdowneValue) {
      this.elements.startPolicyMonthDropdown().select(startPolicyMonthDropdowneValue);
    }

    selectStartPolicyDayDropdown(startPolicyDayDropdownValue) {
      this.elements.startPolicyDayDropdown().select(startPolicyDayDropdownValue);
    }

    clickCalculatePremiumBtn() {
      this.elements.calculatePremiumBtn().click();
    }
  
    clickSaveQuotationBtn(){
      this.elements.saveQuotationBtn().click();
    }

    typeIdentificationNumber(IdNum) {
      this.elements.identificationNumberInput().type(IdNum);
    }

    clickRetriveQuotationBtn(){
      this.elements.retriveQuotationBtn().click();
    }
  }
  
  export const quotationPage = new QuotationPage();