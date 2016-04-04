var sum = 0;
//console.log(process.argv)

for(var i = 2; i < process.argv.length; i++){
  sum += +process.argv[i];
}

console.log(sum);

//or
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//  result += Number(process.argv[i])

// console.log(result)