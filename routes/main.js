const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get("/", (request, response) => {
    console.log("GET in '/'");
    response.send("Hello in main route!");
});

router.get("/status", (request, response) => {
    console.log("GET in '/status'");
    response.status(200).json({ message: "ok", status: 200});
});

router.post("/rejestracja", passport.authenticate('signup', { session: false}),(request, response) => {
    response.status(200).json({ message: "Signup successful", status: 200});
});

router.post("/login", (request, response, next) => {
    console.log("POST in '/login'");
    passport.authenticate('login', (error, user) => {
        try {
            if(error) {
                return next(error);
            }
            if (!user) {
                return next(new Error('Email and password are required'));
            }

            request.login(user, { session: false}, (error) => {
                if (error) {
                    return next(error);
                }
                console.log(request.body.email);
                console.log('Login successful');
                return response.status(200).json({ user, status: 200});
            });
        } catch(error) {
            console.log(error);
            return next(error);
        }
    })(request, response, next);
});

router.post("/logout", (request, response) => {
    console.log("POST in '/logout'");
    if(!request.body) {
        response.status(400).json({message: "invalid body", status: "400"})
    } else {
        response.status(200).json({ message: "ok", status: 200});
    }
});

router.post("/token", (request, response) => {
    console.log("POST in '/token'");
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