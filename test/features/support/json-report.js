// 'use strict';
// const Cucumber = require('cucumber');
// const reporter = require('cucumber-html-reporter');
// const fs = require('fs-extra');
// const path = require('path');
//
// const JsonFormatter = Cucumber.Listener.JsonFormatter();
//
// const currentTime = new Date().toJSON().replace(/:/g, "-");
// console.log("Time = " + currentTime);
//
//
// module.exports = function () {
//     this.After(function () {
//         console.log('JSON Report Hook Starts==========>')
//         JsonFormatter.log = function (json) {
//
//             let reportPath = 'test/reports/output';
//             let reportPathHTML = 'test/reports/output-html';
//             let jsonReport = JSON.parse(json);
//             let featureName = null;
//             let reportFile;
//             //let platform_name = null;
//
//             if (jsonReport.length > 0) {
//                 featureName = jsonReport[0].name.replace(/\s+/g, '_').replace(/\W/g, '').toLowerCase() || 'noName';
//             }
//
//             reportFile = featureName + '.json';
//
//             let AbsreportPath = reportPath + "/" + reportFile;
//
//             let destination = path.join(__dirname, reportPath);
//
//             fs.open(AbsreportPath, 'w+', function (err, fd) {
//                 if (err) {
//                     console.log('There is an error opening or writing to the file: ' + err + AbsreportPath);
//                     fs.mkdirsSync(destination);
//                     fd = fs.openSync(AbsreportPath, 'w+');
//                 }
//
//                 fs.writeSync(fd, json);
//
//                 console.log('Run Complete: json reports file location: ' + AbsreportPath);
//
//                 let options = {
//                     theme: 'bootstrap',
//                     jsonFile: AbsreportPath,
//                     output: reportPathHTML + "/" + featureName + '.html',
//                     reportSuiteAsScenarios: true,
//                     launchReport: false,
//                     metadata: {
//                         "Test Environment": "SBX",
//                         "Browser": "Chrome",
//                         "Platform": "Mac OS",
//                         "Parallel": "Scenarios", "Executed": "Remote",
//                         "Quality Engineers": "CM&P QE Team"
//                     }
//                 };
//                 reporter.generate(options);
//             });
//         };
//         //this.registerListener(JsonFormatter);
//         console.log('<=====================JSON Report Hook Ends')
//
//     });
//
// }
//
//
//
//
//
//
