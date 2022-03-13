const express = require("express");
const app = express();
const { errorLogger, errorResponder, invalidPathHandler } = require('./middleware')
app.use(express.json());
require('./swagger-config')(app);

app.use(require('./routes'));

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

module.exports = app;