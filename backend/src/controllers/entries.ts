import { Response, NextFunction as Next, Request } from 'express'
import TeacherModel from '@/models/entry'

type RequestType = {
  getAll: Request<{}>
}

export const getAll = async (req: RequestType['getAll'], res: Response, next: Next) => {
  console.log('Getting all teachers')

  try {
    const teachers = await TeacherModel.find()

    return res.status(200).json(teachers)
  } catch (err) {
    console.log('Error fetching teachers:', err)

    return next(err)
  }
}
