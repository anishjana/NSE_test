const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');

const app = express();

app.use(bodyParser.json());
app.use (cors());


const posts = require('./routes/api/post.js');

app.use('/', posts);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Running on ${port}`));