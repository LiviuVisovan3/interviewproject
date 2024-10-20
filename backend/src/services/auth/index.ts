import { Request, Response, NextFunction } from 'express'
import { User as UserType, UserRole } from '@/../../shared'

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    // eslint-disable-next-line no-unused-vars
    interface User extends UserType {
      id: string
    }
  }
}

export const ALL_USERS: UserType[] = [
  {
    id: 'usr-id-1',
    name: 'John Doe',
    calorieLimit: 1650,
    token: 'usr-token-1',
    role: UserRole.User,
  },
  {
    id: 'usr-id-2',
    name: 'Mr. Admin',
    calorieLimit: 1750,
    token: 'usr-token-2',
    role: UserRole.Admin,
  },
  {
    id: 'usr-id-3',
    name: 'Janett Doe',
    calorieLimit: 2100,
    token: 'usr-token-3',
    role: UserRole.User,
  },
]

export const withCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  console.log('token', token)

  const currentUser = ALL_USERS.find(x => x.token === token?.replace('Bearer ', ''))

  console.log('currentuser', currentUser)

  if (!currentUser) {
    return res.status(401).end()
  }

  req.user = currentUser

  next()
}
