require('dotenv').config();
const { db } = require('./db/db');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const { readdirSync } = require('fs');
const app = express();

// middlewares: we want data to be in JSON
app.use(express.json());
app.use(cors());
//routes
// api/v1 is a base URL 
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port', PORT);
    })
}

server()