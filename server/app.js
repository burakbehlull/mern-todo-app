const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Im Buvak'ın sunumuyla..");
})

const port = process.env.PORT || 80;
app.listen(port)