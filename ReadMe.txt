If you haven't already, install the following programs:

Node.js: install from their website here:
https://nodejs.org/

protractor: download from github here:
https://github.com/angular/protractor

protractor-cucumber: navigate to "protractor-examples" and run this command to add the protractor-cucumber dependancy:
npm install protractor-cucumber --save-dev

protractor: install protractor globally with this command:
npm install -g protractor

cucumber: install cucumber globally with this command:
npm install -g cucumber

webdriver: update webdriver with this command:
webdriver-manager update




Before running tests, you must have a webdriver instance running. open command prompt and enter:
webdriver-manager start

Now to run the tests here go to the "protractor-examples" directory and run the command:
cucumber.js