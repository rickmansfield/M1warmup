// const http = require("http"); // built in node.js module to handle http traffic

const express = require('express')
const port = 5000; // a port we'll use to watch for traffic
const server = express();
server.use(express.json());
// const server = http.createServer((req, res) => {
//     // creates our server
//     res.statusCode = 200; // http status code returned to the client
//     res.setHeader("Content-Type", "text/plain"); // inform the client that we'll be returning text
//     res.end("Hello World from Node\n"); // end the request and send a response with the specified message
// });

server.get('/hobbits', (req, res) => {
    res.send('Welcome to Hobbiton');
}) // READ data

server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbis', oeration: 'POST' });
}); //CREAT data

server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
})// UPDATE data

server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    // or we could destructure it like so: const { id } = req.params;
    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE for hobbit with id ${id}`,
    });
}); //Destroying/DELETEING data

server.listen(port, () => {
    // start watching for connections on the port specified
    console.log(`Server listening at ${port}/`);
});