import { IUser } from 'interfaces/IUser'
import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data/users'

type Data = IUser[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(users)
}
