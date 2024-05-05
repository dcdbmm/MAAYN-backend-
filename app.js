const express = require('express');
const app = express();
const cors = require('cors');
//const logger = require('./logger/logger');
const registerLoginCredentials = require("./services/registerService");
const validateLoginCredentials = require("./services/loginService");
const {getAccountDetails, createAccountDetails, updateAccountDetails} = require("./services/accountService");
const port = 8080;

//Simple request time logger
app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
);
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("Hello world!");
});

app.post('/login', (request, response) => {
    console.log(request.body);
    validateLoginCredentials(request, response);
    //response.status(200).json( { message: "Successfully logged in!", id: 1 });
});
app.post('/register', (request, response) => {
    console.log(request.body);
    registerLoginCredentials(request, response);
    //response.status(201).json({message: "Successfully logged in!", id: 1});
});

app.get('/account', (request, response) => {
    console.log(request.query);
    getAccountDetails(request, response);
});

app.post('/account', (request, response) => {
    console.log(request.body);
    createAccountDetails(request, response);
    //response.status(200).json({message: "Successfully logged in!", id: 1});
});

app.put('/account', (request, response) => {
    console.log(request.body);
    updateAccountDetails(request, response);
});

app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}`);
});