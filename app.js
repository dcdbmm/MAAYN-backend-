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
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("Hello world!");
});

app.post('/login', (request, response) => {
    console.log(request.body);
    response.status(200).json( { message: "Successfully logged in!", id: 1 });
});
app.post('/register', (request, response) => {
    console.log(request.body);
    response.status(201).json({message: "Successfully logged in!", id: 1});
});

app.post('/account', (request, response) => {
    console.log(request.body);
    response.status(200).json({message: "Successfully logged in!", id: 1});
});

app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}`);
});