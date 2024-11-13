const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

async function start() {
  try {
    await mongoose.connect(config.MONGO_URI)
    console.log(`MongoDB connected.`)

    app.listen(config.PORT, () => {
      console.log(`Server listening on http://localhost:${config.PORT}`)
    })
  } catch (e) {
    console.log('MongoDB Connected error: ', e.message)
  }
}

start()
