var result = 0;
process.argv.forEach(function(arg) {
  var num = Number(arg);
  result += isNaN(num)?0:num;
});
console.log(result);
