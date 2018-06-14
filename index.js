const bodyParser = require('body-parser');
const express = require('express');

const appConfig = require('./configs/app');
const indexRouter = require('./src/routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(indexRouter);

const server = app.listen(appConfig.port, () => {
  console.log('App running on port', server.address().port);
});

module.exports = server;
