# BDD-with-cypress-cucumber

This template will help you to have a testing framework as per the standards of behavior-driven development approach. The most famous tool for BDD is cucumber and we have used cucumber only in this template. So template will basically help you to have a integated cypress BDD cucumber testing framework. 

# Steps to integrate cucumber with Cypress. 

To do so, we would have to use some external plugins. Please follow the steps mentioned below.

1. Install the cucumber plugin by running the following command.
```
npm install --save-dev cypress-cucumber-preprocessor
```
2. After installing the plugin, add this code snippet in the index.js file under the plugins folder.
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
3. Then to make cypress recognise the .feature extension, we would have to add this in our cypress.json file.
```
{
  "testFiles": "**/*.feature"
}
```
Note:- This will make cypress to ignore the .js extension. If you want both the extension to be recognized by the cypress add the following in your cypress.json file

```
{
    "testFiles": "**/*.{feature,js}"
} 
```
 
4. After that, we also have to add the following in the package.json file.
```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
This will help cypress to convert the mmocha test to a feature file having gherkins syntax.

5. And lastly, we need to add an extension to our IDE so that it can recognise the .feauture extension. In our case we have used Visual Code Studio. you can intall the plugin by 
a. pess ctrl+P
b. type 'ext install alexkrechik.cucumberautocomplete'
c. press enter 

And the cucumber extension will get configured for our IDE.


**Plugin Used:-**
We have used only one plugin i.e. cypress-cucumber-preprocessor plugin. Please refer to the first point of Steps to integrate cucumber with Cypress. 


**Technologies used**:-
Programming language - JavaScript, Gherkins

Build tool - Node Js

Automation tool - Cypress

IDE - Visual Code Studio

Assertion framework - Chai, Mocha, jQuery

**Steps for execution:-**

In order to run the test, we just have to go into the directory 

1.  Check out to the directory ../Cypress/e2e/cucumber-test/features

2. To open the cypress dashboard, use the command

```
> npx cypress open   
```

3.  To run the test in Headless mode and to view video and allure report ,use the command
```
npm run cypress:execution-allure
```

4. To run the test in browser, use the command

```
cypress open --e2e --browser chrome
```
