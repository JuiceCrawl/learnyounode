var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory,function(err, list){
  for(var i = 0; i < list.length; i++){
    //path.extname returns with a '.' and extension doesn't have a dot
    if(path.extname(list[i]).slice(1) === extension){
      console.log(list[i])
    }
  }
})

//or
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
// })