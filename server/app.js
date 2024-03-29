const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const pageRouter = require('./routers/pageRouters');
const mongodbURL = require('./mongodbURL.json')['url'];

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

mongoose.connect(mongodbURL).then(() => {
    console.log("Veritabanına erisim sağlandı.");
});

app.use(pageRouter);

const port = process.env.PORT || 80;
app.listen(port);