var apickli = require('apickli');
var config = require('../../config/config.json');

var defaultBasePath = config.cmpcbo.basepath;
var defaultDomain = config.cmpcbo.domain;

console.log('CMP-CBO Domain :',config.cmpcbo.domain + config.cmpcbo.basepath);

var getNewApickliInstance = function(basepath, domain) {
	basepath = basepath || defaultBasePath;
	domain = domain || defaultDomain;

	return new apickli.Apickli('https', domain + basepath);
};

exports.getNewApickliInstance = getNewApickliInstance;
