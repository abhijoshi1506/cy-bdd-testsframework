Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the guru99 Insurance login page
    Scenario: Success Login
        When A user enters the username "testuser1@a.com", the password "admin123", and clicks on the login button
        Then the url will contains the header page
    
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | admin123 |
        Then The error message "Enter your Email address and password correct" is displayed
   
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | testuser1@a.com | 123 |
        Then The error message "Enter your Email address and password correct" is displayed