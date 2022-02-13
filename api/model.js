
const repository = require('./repository');

class Model {
  async getNotasbyIdAluno(idAluno, response){
    try {
      const result = await repository.getNotasbyIdAluno(idAluno);
      if(result.rowCount === 0){
        throw new Error(`Nenhum resultado encontrado.`);
      }
      
      const finalResult = result.rows.map((aluno) => {
        const media = (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4)/4;
        aluno.media = media;
        if(media>=6){
          aluno.status = "aprovado";
        }else if(media>=4){
          aluno.status = "recuperação";
        } else{
          aluno.status = "reprovado";
        }
        return aluno;
      });

      response.status(200);
      response.send(finalResult);
      console.log(`${new Date().toLocaleString()} -> busca realizada para idAluno ${idAluno}.`);
    } catch (error) {
      console.log(`${new Date().toLocaleString()} -> erro ao buscar aluno ${idAluno} erro: ${error.message}`);
      response.status(400);
      response.send({erro: error.message});
    }  
    
  }
}

module.exports = new Model;