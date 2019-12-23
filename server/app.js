const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const gets = require('./routes/api/get.js');
const app = express();


app.use(bodyParser.json());
app.use (cors()); 
app.use('/', gets);




// running server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));