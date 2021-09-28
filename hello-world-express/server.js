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
let hobbits = [
    {
        id: 1,
        name: 'Bilbo Baggins',
        age: 111,
    },
    {
        id: 2,
        name: 'Frodo Baggins',
        age: 33,
    },
];
let nextId = 3;

server.get('/hobbits', (req, res) => {
    // query string parameters get added to req.query
    console.log('req.query');
    const sortField = req.query.sortby || 'id';
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee',
        },
        {
            id: 2,
            name: 'Frodo Baggins',
        },

    ];

    // apply the sorting
    const response = hobbits.sort(
        (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );

    res.status(200).json(response);
}); // READ data

server.post('/hobbits', (req, res) => {
    const hobbit = req.body;
    hobbit.id = nextId++;

    hobbits.push(hobbit);

    res.status(201).json(hobbits);
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