const express = require('express');
const app = express();
const routes = require('./api/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./doc/swagger_output.json');

require('dotenv').config();

app.use('',routes);

const port = process.env.PORT;

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(port, () => {
  console.log(`Aplicação ativa na porta: ${port}`);
});