const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

//Simple request time logger
app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
);

app.use(cors());

app.get('/', (request, response) => {
    response.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}`);
});