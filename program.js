var fs = require('fs')
var path = require('path')

var extension = "." + process.argv[3];

fs.readdir(process.argv[2], function callback(err, contents) {
  if (err) {
    console.log(err);
  }
  contents.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
