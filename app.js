const express = require('express');
const router = require('./src/routes/api');
const app = new express();

//Security Middlewares
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(hpp());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 min
    max: 100 //100 reqest per windowMs
});
app.use(limiter);


app.use("/api", router);

app.use("*", (req, res) => {
    res.status(404).json({status:"Failed", data: "Not found"});
})

module.exports = app;