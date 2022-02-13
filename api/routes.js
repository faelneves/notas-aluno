const router = require('express').Router();
const controller = require('./controller');

router.get('/get/:idAluno', controller.getNotasbyIdAluno);

module.exports = router;