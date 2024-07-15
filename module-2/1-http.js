const http = require('node:http');
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200 // Ok
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1> Welcome to my page </h1>');
    } else if (req.url === '/pretty-image.png') {

        fs.readFile('./place.png', (err, data) => {
            if (err){
                res.statusCode = 500;
                res.end('<h1>Internal server error</h1>');
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        });
    } else if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Contact</h1>');
    } else {
        res.statusCode = 404
        res.end('<h1>Not found</h1>');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server started on port http://localhost:${desiredPort}!`);
});
