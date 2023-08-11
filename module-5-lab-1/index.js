const express = require('express')
const  calculatorRoute = require('./routes/calculatorRoute');

const app = express()
const port = 3707
const PUBLIC_DIR = 'public';

app.use('/', express.static(PUBLIC_DIR));

app.use('/calculator',calculatorRoute);

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`)
})