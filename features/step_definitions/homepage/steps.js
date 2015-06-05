var support = require('../support');

var steps = function() {
 
  this.Given(/^I am on the homepage$/, function(callback) {
	  
	    support.get('http://shinobievolution.forumotion.com/', this, callback, true);
  });
  
  
  
  this.When(/^I navigate to the login page$/, function(callback){
	  
	  	support.clickElement('//a[@href=\'/login\']', this, callback, true);
  });
  
  
  
  this.When(/^I enter my credentials$/, function(callback) {

	  	support.sendElementKeys('//*[@id=\'username\']', 'Admin', this, callback, false);

	  	support.sendElementKeys('//*[@id=\'password\']', 'Password8', this, callback, true);
  });
  
  
  
  this.When(/^I login$/, function(callback) {

	  	support.clickElement('//input[@name=\'login\']', this, callback, true);
  });
  
  
  
  this.Then(/^I should see admin panel$/, function(callback) {

	  	support.checkExists('//a[text()=\'Administration Panel\']', true, this, callback, true);
  
  });
  
  
  
  this.Then(/^There should be javascript$/, function(callback){
	  
	    support.runJavascriptForResult('foo()', 2, this, callback, true);
  });
  
};

module.exports = steps;