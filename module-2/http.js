const http = require('node:http')
const {findAvailablePort} = require('./10-free-port')

const desiredPort = process.env.PORT ?? 3000;
const server = http.createServer((req, res) => {
    console.log('Server started');
    res.end('Hello World!');
});


server.listen(desiredPort, () => {
    console.log(`Server started on port http://localhost:${port}!`);
});
