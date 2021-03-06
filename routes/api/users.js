const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require("passport");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateFavorites = require("../../validation/favorites");


router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

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
                                            userId: user.id,
                                            email: user.email,
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

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

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
                                    userId: user.id,
                                    email: user.email,
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
});

router.get("/favorites", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.findOne({ _id: req.user.id }).exec((err, user) => {
        res.json(
            user.favorites
        )
    })
});

router.put("/favorites/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateFavorites(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ _id: req.user.id }).exec((err, user) => {
        let new_favorites = user.favorites;
        if (new_favorites.find(link => link.label === req.body.lebel)) {
            return res.status(400).json({ label: "duplicate label" })
        } else if (new_favorites.find(link => link.url === req.body.url)) {
            return res.status(400).json({ url: "duplicate url" })
        }
        else {
            new_favorites.push({ label: req.body.label, url: req.body.url });
            User.update({ _id: req.user.id }, { favorites: new_favorites }).then(
                res.json(
                    user.favorites
                ));
        }
    })
});

router.delete("/favorites/remove", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateFavorites(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
})

module.exports = router;