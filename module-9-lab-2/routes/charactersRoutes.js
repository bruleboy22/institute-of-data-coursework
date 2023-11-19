const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.charactersController.getCharacters(req, res);
})

router.put('/:id', (req, res) => {
    Controllers.charactersController.updateCharacter(req, res)
})

module.exports = router;