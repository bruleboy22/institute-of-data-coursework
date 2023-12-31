const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.booksController.getBooks(req, res);
})

module.exports = router;