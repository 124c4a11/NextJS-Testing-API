import { IUser } from 'interfaces/IUser';

import { getUsers } from './getUsers';


interface IResponse {
  data: IUser[];
}


describe('USERS API - GET USERS', () => {
  it('returns an array of users', async () => {
    // mockedAxios.get.mockResolvedValue(response);

    const users = await getUsers();
    const user = users[0];

    expect(Array.isArray(users)).toBe(true);
    expect(user).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
    }));

  });
});
