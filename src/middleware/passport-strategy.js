require('dotenv').config()
const { Strategy, ExtractJwt } = require('passport-jwt')

const config = require('../config')

const UserModel = require('../models/user.model')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT,
}

module.exports = new Strategy(options, async (payload, done) => {
    console.log('passport strategy')
    try {
        const candidate = await UserModel
            .findById(payload.userId)
            .select('id')

        if (candidate) {
            done(null, candidate)
        } else {
            done(null, false)
        }
    } catch (e) {
        console.error(e)
    }
})
