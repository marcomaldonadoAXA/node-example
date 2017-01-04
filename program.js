var fs = require('fs')
fs.readFile(process.argv[2], function callback(err, contents) {
  if (err) {
    console.log(err);
  }
  console.log(contents.toString('utf8').split('\n').length - 1);
});
