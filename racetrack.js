var racetrackIpsum = require('./lib/racetrack-ipsum');
var pastaMaker     = require('./lib/pasta-maker');

var options = {}, 
    arguments = require('minimist')(process.argv.slice(2)),
    greenFlag = '';    

options.count  = arguments.count || 4;
options.unit   = arguments.unit  || 'paragraphs';
options.copy   = arguments.copy  || false; 
options.asHtml = arguments.html  || false;

greenFlag = racetrackIpsum(options);
console.log(greenFlag);

if (options.copy) {
  pastaMaker(greenFlag, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit();
}
