const fs = require('fs');
const data = fs.readFileSync('hello.txt');
console.log("File content: " + data);
