import { Response, NextFunction as Next, Request } from 'express'

type RequestType = {
  getAll: Request<{}>
}

export const getAll = async (_: RequestType['getAll'], res: Response, next: Next) => {
  console.log('Getting all teachers')

  try {
    const teachers = [
      { id: '5498233', name: 'Dianne Russell', subject: 'Mathematics', classes: 5, review: 4.9 },
      { id: '5498235', name: 'Bessie Cooper', subject: 'English', classes: 4, review: 4.7 },
      { id: '5498240', name: 'Marvin McKinney', subject: 'Arabic', classes: 7, review: 4.8 },
      { id: '5498236', name: 'Jerome Bell', subject: 'History', classes: 4, review: 4.9 },
      { id: '5498237', name: 'Arlene McCoy', subject: 'Geography', classes: 5, review: 4.6 },
      { id: '5498238', name: 'Guy Hawkins', subject: 'Mathematics', classes: 6, review: 4.8 },
      { id: '5498239', name: 'Floyd Miles', subject: 'Geography', classes: 4, review: 4.7 },
      { id: '5498241', name: 'Jane Cooper', subject: 'History', classes: 3, review: 4.9 },
      { id: '5498242', name: 'Courtney Henry', subject: 'Arabic', classes: 4, review: 4.5 },
      { id: '5498243', name: 'Annette Black', subject: 'English', classes: 5, review: 4.2 },
    ]

    return res.status(200).json(teachers)
  } catch (err) {
    console.log('Error fetching teachers:', err)

    return next(err)
  }
}
