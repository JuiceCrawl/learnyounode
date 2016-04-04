var fs = require('fs');
 var buffer = fs.readFileSync(process.argv[2]);

  var str = buffer.toString();
  var split = str.split('\n');
  
  console.log(split.length-1)

//or
// var fs = require('fs')
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

//or utf8 converts to a string
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
// console.log(buffer)

