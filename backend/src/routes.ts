import express, { NextFunction, Request, Response } from 'express'
// eslint-disable-next-line import/no-unresolved
import { Express } from 'express-serve-static-core'
import * as teachers from '@/controllers/entries'
import * as Sentry from '@sentry/node'

const apiRouter = express.Router()

apiRouter.get('/teachers', teachers.getAll)

export default (app: Express) => {
  app.use('/api', apiRouter)

  app.get('/api/*', (_, localRes) => {
    localRes.status(404).json({ message: 'not found' })
  })

  app.get('*', (_, localRes) => localRes.redirect('https://your-site-url.com/'))

  app.use((err: any, _: Request, res: Response, __: NextFunction) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'bad request' })
    }
    if (err.type === 'invalidFileName') {
      return res.status(400).json({ message: err.message })
    }

    console.log('err', err)
    Sentry.captureException(err)
    return res.status(500).json(err)
  })
}
