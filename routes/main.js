const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    console.log("GET... in '/'");
    response.send("Hello in main route!");
});

router.get("/status", (request, response) => {
    console.log("GET... in '/status'");
    response.status(200).json({ message: "ok", status: 200});
});

router.post("/rejestracja", (request, response) => {
    if(!request.body.test) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        console.log(request.body.test);
        response.status(200).json({ message: "ok", status: 200});
    }
});

router.post("/login", (request, response) => {
    console.log("POST... in '/login'");
    if(!request.body) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

router.post("/logout", (request, response) => {
    console.log("POST... in '/logout'");
    if(!request.body) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

router.post("/token", (request, response) => {
    console.log("POST... in '/token'");
    if(!request.body || !request.body.refreshToken) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        const { refreshToken } = request.body;
        response.status(200).json({ 
            message: `Refresh token requested for token: ${refreshToken}`, status: 200
        });
    }
});

module.exports = router;