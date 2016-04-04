var http = require('http');
var concat = require('concat-stream');

var result = []
var count = 0;

time(3);

function httpGet(index){
  http.get(process.argv[2 + index], function(response){
    response.setEncoding('utf8');
    response.pipe(concat(function(data){
      //have to use index number instead of push to control placement
      result[index] = data;
      count++;
      //have to keep track & call print here otherwise risk calling too early
      if(count === 3){
        print();
      }
    }))
  })
}

function print(){
  result.forEach(function(data){
    console.log(data)
  })
}

function time(num){
  for(var i = 0; i < num; i++){
    httpGet(i);
  }
}

//or
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//  for (var i = 0; i < 3; i++)
//    console.log(results[i])
// }

// function httpGet (index) {
//  http.get(process.argv[2 + index], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err)
//        return console.error(err)

//      results[index] = data.toString()
//      count++

//      if (count == 3)
//        printResults()
//    }))
//  })
// }
// for (var i = 0; i < 3; i++)
//    httpGet(i)


// First attempt didn't track and control three requests
// var url1 = process.argv[2];
// var url2 = process.argv[3];
// var url3 = process.argv[4];

// http.get(url1, function(response){
//   response.setEncoding('utf8');
//   response.pipe(concat(function(data){
//     console.log(data)
//   }))
// })

// http.get(url2, function(response){
//   response.setEncoding('utf8');
//   response.pipe(concat(function(data){
//     console.log(data)
//   }))
// })

// http.get(url3, function(response){
//   response.setEncoding('utf8');
//   response.pipe(concat(function(data){
//     console.log(data)
//   }))
// })
 


