const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const pageRouter = require('./routers/pageRouters')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Im Buvak'ın sunumuyla..");
})
app.use(pageRouter)

const port = process.env.PORT || 80;
app.listen(port)