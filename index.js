const express = require('express');
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    console.log("Get... in '/'");
    response.send("Hello in main route!");
});

app.get("/status", (request, response) => {
    console.log("Get... in '/status'");
    response.status(200).json({ message: "ok", status: 200});
});

app.post("/rejestracja", (request, response) => {
    console.log("Post... in '/rejstracja'");
    response.status(200).json({ message: "ok", status: 200});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});