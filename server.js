const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(helmet());
server.use(express.json());

const router = require('./api/routerApi');
server.use('/api/router', router);
server.get('*', (req, res) => {
res.send(
 '<h1>It is finally working</h1>'
)
});

module.exports = server;