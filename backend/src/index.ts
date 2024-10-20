import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import app from './app'
import config from '@/config'

const connect = (url: string) =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

console.time('broken badly')

if (require.main === module) {
  console.time('before')
  app.listen(config.port)
  console.time('listening')
  connect(config.databaseUrl!)
  console.time('connected')

  mongoose.connection.on('error', console.log)
}

export default { connect }
