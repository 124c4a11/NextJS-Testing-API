import axios from 'axios';

import { IUser } from '../interfaces/IUser';


export async function getUsers() {
  const { data } = await axios.get<IUser[]>(`${process.env.API_HOST}/users`);

  return data;
}
