
import { createInsertSchema, table } from '@repo/db'
import { t, Elysia } from 'elysia'

const createUserSchema = createInsertSchema(table.user, {
    email: t.String({ format: 'email' }),
});

const schema = t.Omit(
    createUserSchema,
    ['id', 'salt', 'createdAt']
);

export const createAccount = (app: Elysia) => {
   app.post('/create-account', ({ body }) => {
    console.log("create user", body);
   }, {
    body: schema
   })
};
