const bodyParser = require('body-parser');
const express = require('express');

const appConfig = require('../configs/app');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const server = app.listen(appConfig.port, () => {
  console.log('App running on port', server.address().port);
});

module.exports = server;
