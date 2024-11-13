const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user.model');
const config = require('../config');

module.exports.signIn = async (req, res) => {
    const candidate = await UserModel.findOne({
        email: req.body.email
    });

    if (candidate) {
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            candidate.password
        );

        if (isPasswordCorrect) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id,
            }, config.JWT, {
                expiresIn: 60 * 60,
            });
            res.status(200).json({token});
        } else {
            res.status(401).json({
                message: 'Пароль неверный',
            });
        }
    } else {
        res.status(404).json({
            message: 'Пользователь не найден',
        });
    }
};

module.exports.createUser = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email
    });

    if (candidate) {
        res.status(409).json({
            message: 'Такой Email уже занят',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);

        const user = new UserModel({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt),
        });

        await user.save();

        res.status(201).json(user);
    }
};
