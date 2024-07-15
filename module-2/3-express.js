const ditto = require('./pokemon/ditto.json');
const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 3000;

app.disable('x-powered-by');

app.use((req,res,next)=>{
    if (req.method !== 'POST') return next();
    if (req.headers['content-type'] !== 'application/json') return next();


    let body = '';
    // Listen data event
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        const data = JSON.parse(body);
        //     Call database to store the info
        data.timestamp = Date.now();
        res.status(201).json(data);
    })
});

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto);
})

app.post('/pokemon', (req, res) => {
    let body = '';
    // Listen data event
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        const data = JSON.parse(body);
        //     Call database to store the info
        data.timestamp = Date.now();
        res.status(201).json(data);
    })
})

// Last one to reach
app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`)
});
