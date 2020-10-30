const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// update express settings
app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.get("/", (request, response) => {
    console.log("Get... in '/'");
    response.send("Hello in main route!");
});

app.get("/status", (request, response) => {
    console.log("Get... in '/status'");
    response.status(200).json({ message: "ok", status: 200});
});

app.post("/rejestracja", (request, response) => {
    console.log(request.body.test);
    if(!request.body.test) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

app.post("/login", (request, response) => {
    console.log("Post... in '/login'");
    if(!request.body) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

app.post("/logout", (request, response) => {
    console.log("Post... in '/logout'");
    if(!request.body) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

app.post("/token", (request, response) => {
    console.log("Post... in '/token'");
    if(!request.body || !request.body.refreshToken) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        const { refreshToken } = request.body;
        response.status(200).json({ 
            message: `Refresh token requested for token: ${refreshToken}`, status: 200
        });
    }
});

app.post("/forgot-password", (request, response) => {
    console.log("Post... in '/forgot-password'");
    if(!request.body || !request.body.email) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        const { email } = request.body;
        response.status(200).json({ 
            message: `Forgot password requested for email: ${email}`, status: 200
        });
    }
});

app.post("/reset-password", (request, response) => {
    console.log("Post... in '/reset-password'");
    if(!request.body || !request.body.email) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        const { email } = request.body;
        response.status(200).json({ 
            message: `Password reset requested for email: ${email}`, status: 200
        });
    }
});

// catch all other routes
app.use((request, response) => {
    response.status(404).json({message: "404 - Not found", status: 404});
});

// handle errors 
app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({error: error.message, status: 500});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});