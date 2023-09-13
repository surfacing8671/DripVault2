var fs = require('fs');
var array = fs.readFileSync('./autovault2 - autovault2.csv').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}