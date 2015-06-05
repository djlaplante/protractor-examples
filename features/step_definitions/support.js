var Support = function(){
};

var assert = require('assert');
 
Support.prototype.get = function(html, caller, callback, timeout){
	
	caller.browser.driver.get(html).then(function(result){
		if(timeout)
			setTimeout(callback, 1000);
	});
};



Support.prototype.clickElement = function(xpath, caller, callback, timeout){
	
	caller.browser.driver.findElement(caller.by.xpath(xpath)).then(function(result){
  		result.click();
		if(timeout)
			setTimeout(callback, 1000);
	});
};



Support.prototype.sendElementKeys = function(xpath, keys, caller, callback, timeout){

	caller.browser.driver.findElement(caller.by.xpath(xpath)).then(function(result){
  		result.sendKeys(keys);
		if(timeout)
			setTimeout(callback, 1000);
	});
};



Support.prototype.checkExists = function(xpath, exists, caller, callback, timeout){
	try{
		caller.browser.driver.findElement(caller.by.xpath(xpath)).then(function(result){
			if(!exists)
				assert.fail('Element should not be displayed: '+xpath, 'But it is', '',', ');
			if(timeout)
				setTimeout(callback, 1000);
		});
	}
	
	catch(exception){
		if(exists)
			assert.fail('Element should be displayed: '+xpath, 'But it is not', '',', ');
		if(timeout)
			setTimeout(callback, 1000);
	}
};



Support.prototype.runJavascriptForResult = function(functionName, expResult, caller, callback, timeout){

	caller.browser.driver.executeScript("alert("+functionName+");").then(function(result){
		assert.equal(result, expResult);
		if(timeout)
			setTimeout(callback, 1000);
	});
};



 
module.exports = new Support();