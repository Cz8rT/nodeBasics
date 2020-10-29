const express = require('express');
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    console.log("Get...");
    response.send("Hello in main route!");
})

app.get("/test", (request, response) => {
    response.send("Witaj w '/test'!");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});