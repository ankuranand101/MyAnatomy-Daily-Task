const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the home page!\n');
        res.end();
    }else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the about page!\n');
    }else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the contact page!\n');
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found!\n');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});