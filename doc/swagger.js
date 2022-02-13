const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();
const outputFile = './doc/swagger_output.json';

const endpointsFiles = ['./api/routes.js'];

const doc = {
  info: {
    version: "1.0.0",
    title: "Notas Aluno",
    description: "API usada para que alunos acompanhem suas notas."
  },
  host: `localhost:${process.env.PORT}`,
  basePath: "/",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Get: [
      {
        "idNotas": "3",
        "idAluno": "5",
        "nome": "Jhon Doe",
        "n1": 7,
        "n2": 4,
        "n3": 5,
        "n4": 0,
        "media": 4,
        "status": "recuperação"
      }
    ]
  },
  
}
swaggerAutogen(outputFile, endpointsFiles, doc);