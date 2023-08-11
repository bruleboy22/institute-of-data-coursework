const express = require('express');
const router = express.Router('./routes/myTestRoute');

router.get('', (req, res) => {
    res.send('this is the index route!')
    })

router.get('/test', (req, res) => {
res.send('Hello World!')
})

router.get('/test2', (req, res) => {
res.send('Second test!!!!')
})

module.exports = router;