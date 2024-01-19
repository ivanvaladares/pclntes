const express = require('express')
const http = require('http')
const server = express()
const path = require('path')

server.use(express.static(path.join(__dirname, '/public/')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.createServer(server)
    .listen(8080, () => {
        console.log(`server listening on http://localhost:${8080}`)
    })