/* jshint node:true */
'use strict';

var factory = require('./factory.js');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = factory.getNewApickliInstance();
        // this.apickli.storeValueInScenarioScope("clientId", "Uvz7ahhlaer3zhOp25BGmAzSQVEbsJNw");
        // this.apickli.storeValueInScenarioScope("clientSecret", "LOoE2q6enoqlTuBT");
		// this.apickli.storeValueInScenarioScope("merchantId", "299659842982");
        // this.apickli.storeValueInScenarioScope("merchantKey", "N3H5G9X7Q3Q5");
        callback();
    });
};

