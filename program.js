var http = require('http');
var bl = require('bl');
var results = ["", "", ""];
var count = 0;
for (var i = 0; i < 3; i++) {
  get(i);
}

function get(index) {
  http.get(process.argv[index + 2], function callback(response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
      if (err) {
        return callback(err);
      }
      results[index] = data.toString();
      count++;
      if (count === 3) {
        results.forEach(function (result) {
          console.log(result);
        })
      }
    }))
  }).on("error",console.error);
};
