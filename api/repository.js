const db = require('../data-base/connection')

class Repository {
  getNotasbyIdAluno(idAluno){
    const sql = `SELECT NOTAS.id as "idNotas", NOTAS."idAluno", ALUNO."nome", NOTAS.n1, NOTAS.n2,NOTAS.n3,NOTAS.n4
    FROM NOTAS JOIN ALUNO ON NOTAS."idAluno" = ALUNO.id WHERE NOTAS."idAluno" = $1`;
    return db.query(sql,[idAluno]);
  }
}

module.exports = new Repository