const express = require('express');
const connectdb = require('./config/db');
const dns = require("node:dns");
const router = require('./router/user');
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const path = require('path');
const cors = require('cors')

const filepath = path.join(process.cwd());

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/form',router)

app.set('view engine','ejs')
app.set('views','view')

app.get('/', (req, res) => {
    res.json({
        message: "API is running"
    });
});

connectdb()

module.exports = app;
