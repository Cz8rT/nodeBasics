const passport = require('passport');
const localStrategy = require('passport-local');

// handle user registration
passport.use('signup', new localStrategy.Strategy({
    usernameField: 'email', 
    passwordField: 'password',
    passReqToCallback: true
}, (request, email, password, done) => {
    console.log("GET in '/rejestracja'");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('Request body:');
    console.log(request.body);

    const { username } = request.body;
    if(username && username !== 'error') {
        return done(null, { name: username});
    } else {
        return done(new Error('Invalid user'));
    }
}));

// handle user login
passport.use('login', new localStrategy.Strategy({
    usernameField: 'email', 
    passwordField: 'password',
    passReqToCallback: true
}, (request, email, password, done) => {
    
    if(email !== 'jordan@test.com') {
        return done(new Error('User not found'), false);
    };

    if(password !== 'test') {
        return done(new Error('Invalid password'), false);
    };

    let { username } = request.body;
    if (!username) {
        username = 'anonymous';
    }
    return done(null, { name: username});
}));