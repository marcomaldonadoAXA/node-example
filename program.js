var fs = require('fs')
var contents = fs.readFileSync(process.argv[2]);
console.log(contents.toString('utf8').split('\n').length - 1);
