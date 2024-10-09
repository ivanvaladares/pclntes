const express = require('express')
const http = require('http')
const server = express()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 8080

server.use(cors())

server.use(express.static(path.join(__dirname, '/public/')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.createServer(server)
    .listen(port, () => {
        console.log(`server listening on http://localhost:${port}`)
    })
