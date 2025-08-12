const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('hello.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
}).listen(3001);

console.log('Server is running on http://localhost:3001');