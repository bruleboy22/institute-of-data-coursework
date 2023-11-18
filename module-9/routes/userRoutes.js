let express = require("express");
let router = express.Router();
const userController = require('../controllers').userController;

router.get('/', (req, res) => {
    userController.getUsers(req, res)
});

router.post('/create', (req, res) => {
    userController.createUser(req, res)
});

router.put('/:id', (req, res) => {
    userController.updateUser(req, res)
});
    
router.delete('/:id', (req, res) => {
    userController.deleteUser(req, res)
});


module.exports = router;