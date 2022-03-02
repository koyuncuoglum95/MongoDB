import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const User = mongoose.model('User', UserSchema);

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!'});
    }
}
// req.body.password let us add and update the value of password and store it to hashPassword from userModels object.
// hashSync is converting our password into the hash code.

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10); // 10 is required from hashSync() method
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hashPassword = undefined; // if there isn't err and registeration complete, hashPassword object will be undefined again.
            return res.json(user); 
        }
    })
}
// find the objects via email you logged in
export const login = (req,res) => {
    User.findOne({
        email: req.body.email // let us add and update email value
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: 'Authentication failed. No user found'});
        } else if (user) {
            // req.body.password  = password for login
            // user.hashPassword = password for register
            // This following code compares with custom comparePassword function with bcrypt method.
            if (!user.comparePassword(req.body.password, user.hashPassword)) { // password you enter while logging and hashPassword from models don't match
                res.status(401).json({ message: 'Authentication failed. Wrong password'});
            } else {
                // We are adding jwt to API values with sign() method
                // We are not adding password to jwt because of user privacy and this process is called secured API.
                return res.json({token: jwt.sign({ email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
            }
        }
    });
}
