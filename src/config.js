const DEV_CONFIG = {
  MONGO_URI: 'mongodb://localhost:27017/localify',
  JWT: 'dev-jwt-key',
  PORT: process.env.PORT || 5002
}

module.exports = DEV_CONFIG;