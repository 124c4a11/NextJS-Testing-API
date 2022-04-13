import { rest } from 'msw';


export const handlers = [
  rest.get(
    `${process.env.API_HOST}/users`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            name: 'UserName',
            email: 'user@mail.mail'
          }
        ])
      )
    }
  )
];
