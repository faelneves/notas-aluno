
const model = require('./model');

const controllers = {
  getNotasbyIdAluno: (request, response) =>{
    /*
      #swagger.tags = ['Get']
      #swagger.description = 'Endpoint para obter as notas de um aluno.'
      #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Get" }
      }
    */
    const idAluno = request.params.idAluno;
    model.getNotasbyIdAluno(idAluno, response);
  }
}

module.exports = controllers;