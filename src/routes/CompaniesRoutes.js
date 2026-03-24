const {Router} = require ('express')
const {handleJoinRoom, handleGetCompanies} = require ('../controller/CompaniesController.js')

const router = Router()

router.post('/join', handleJoinRoom) // coloca os dados da empresa e entra na sala
router.get('/:code', handleGetCompanies) // pega as empresas que estão na sala

module.exports = router