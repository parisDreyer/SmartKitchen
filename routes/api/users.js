const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require("passport");


router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email : "A user already registered with this email"})
            } else {
                const newUser = new User ({
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, email: user.email };

                                jsonwebtoken.sign(
                                    payload,
                                    keys.secretOrKey,
                                    //expires in 24 hours
                                    { expiresIn: 86400 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token
                                        });
                                    }
                                );
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {id: user.id, email: user.email};

                        jsonwebtoken.sign(
                            payload,
                            keys.secretOrKey,
                            //expires in 24 hours
                            { expiresIn: 86400 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                })
        })
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ 
        id: req.user.id,
        email: req.user.email
    });
})

module.exports = router;