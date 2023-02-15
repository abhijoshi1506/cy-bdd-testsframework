Feature: Quotation Manipulation

    Feature  Quotation Manipulation will work depending on the user with credentials and requests and retrive Quotation.

    Background:
        Given A web browser is at the guru99 Insurance login page
        When A user enters the username "testuser1@a.com", the password "admin123", and clicks on the login button
        Then the url should contains the header page

    Scenario: Request Quotation Details
        When User clicks on Request Quotation
        When A user provides Quotation Details, calculates and save quatation
        | Breakdowncover      | incidents     | Registration | AnnualMileage | EstimatedValue | ParkingLocation |Year | Month | Day |
        | At home | 123  | MH20AZ454 | 10000 | 500000 | Public Place |2014| April | 20  |
        Then It should display Success page
       

     Scenario: Retrive Quotation Details
        When User provide valid Identification number and clicks on Retrive Quotation Details
        Then the url should contains the retival page
        Then the page should display quotation details
       
    Scenario: Logout 
        When User click on Logout button
        Then the user should be redirected to home page
   