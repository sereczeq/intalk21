const express = require('express')

const server = express();
server.use(express.static('public'));

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
    res.send("All good")
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))