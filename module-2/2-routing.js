const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

//  commonJS -> modules
const dittoJSON = require('./pokemon/ditto.json');
const processRequest = (req, res) => {
    const {method, url} = req;
    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    return res.end(JSON.stringify(dittoJSON));
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Not found</h1>');
            }

        case 'POST':
            switch (url) {
                case '/pokemon': {
                    let body = '';
                    // Listen data event
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    })
                    req.on('end', () => {
                        const data = JSON.parse(body);
                    //     Call database to store the info
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify(data));
                    })
                    break;
                }

                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    return res.end('404 not found')
            }
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server started on port http://localhost:${desiredPort}!`);
});
