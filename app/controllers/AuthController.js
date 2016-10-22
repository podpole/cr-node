var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto-js');
var user = require('./../models/user');
var config = require('./../config');
var AuthController = function () {

};

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    function(username, password, done) {
        user.findOne({ where: {username: username}}).then(
            function (user) {

                if (!user)
                {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (user.password !== hashPassword(password))
                {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user);
            }
        );
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    user.findById(id).then(function(user) {
        if (!user)
        {
            done(1, user);
        }
        else
        {
            done(null, user);
        }
    });
});

function hashPassword(password) {
    if(!password) {
        return false;
    }
    else
    {
        return crypto.HmacSHA256(password, config.get('sha256key')).toString();
    }
}

AuthController.login = function (req, res, next) {
    passport.authenticate('local',
        function(err, user, info) {
            if (err) {
                return next(err);
            }

            if (user) {
                req.logIn(user, function(err) {
                    if (err)
                    {
                        return next(err);
                    }
                    else
                    {
                        res.redirect('/');
                    }
                });
            }
            else
            {
                res.redirect('/login');
            }
        }
    )(req, res, next);
};

AuthController.loginForm = function (req, res, next) {
    res.render('services/login', { data: 'login' });
};

module.exports = AuthController;