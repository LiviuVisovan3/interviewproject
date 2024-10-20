import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import expressValidator from 'express-validator'
import passport from 'passport'
import setupRoutes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(expressValidator())
app.use(morgan('common'))
app.use(passport.initialize())

setupRoutes(app)

export default app
