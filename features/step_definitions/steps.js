var pc = require('protractor-cucumber');
 
var steps = function() {
  var seleniumAddress = 'http://localhost:4444/wd/hub';
  var options = { browser : 'firefox', timeout : 100000 };
  this.World = pc.world(seleniumAddress, options);
 
  this.After(function(callback) {
	    this.quit(callback);
	  });
  
};
 
module.exports = steps;