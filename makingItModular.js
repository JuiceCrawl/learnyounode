var mymodule = require('./mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, data){
  if(err){
    console.log(err)
  }else{
    data.forEach(function(file){
      console.log(file);
    })
  }
})

//or
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//  if (err)
//    return console.error('There was an error:', err)

//  list.forEach(function (file) {
//    console.log(file)
//  })
// })