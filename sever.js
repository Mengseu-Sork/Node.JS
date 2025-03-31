const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const user = require('./router/user');
server.use("/user", user);

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
