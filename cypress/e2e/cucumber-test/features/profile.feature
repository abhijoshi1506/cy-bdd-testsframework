Feature: User Profile Manipulation

    Feature  Quotation Manipulation will work depending on the user with credentials and did Manipulation of Profile.

    Background:
        Given A web browser is at the guru99 Insurance login page
        When A user enters the username "testuser1@a.com", the password "admin123", and clicks on the login button
        Then the url should contains the header page

    Scenario: User Edits Profile Details
        When User clicks on Edit Profile Menu
        When User provides all Profile Details
        | Title      | Surname     | Firstname | Phone |Year | Month | Day | Licenceperiod |Occupation|Address|City|Country|Postcode|
        | Mr | Joshi  | Abhijit | 112345600 | 1990 | June |15| 10  | Engineer | Chinchwad |Pune|India|40014|
        When User clicks on update user button
        Then User Profile should be updated with provided value
       
    
    Scenario: User Views Profile Details
        When User clicks on Profile Menu
        Then the user should be redirected to profile details page

     
  
   