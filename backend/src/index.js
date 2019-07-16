const express = require('express');
const cors = require('cors');
const database = require('./config/Database');

const app = express();

app.set(database);

app.use(require('./routes'));

app.use(cors({
    origin: 'http://localhost:8081/'
}));

app.listen(8000);  
