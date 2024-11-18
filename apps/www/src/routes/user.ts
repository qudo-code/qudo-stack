import { Elysia } from "elysia";
import {
  createUserSchema,
  selectUserSchema,
  selectUserByIdSchema,
  updateUserSchema,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "db/schema/user";

export const userRoutes = (app: Elysia) => {
  // Get user
  app.get(
    "/user/:id",
    ({ params }) => {
      return getUser(params);
    },
    {
      params: selectUserSchema,
    },
  );

  // Create user
  app.put(
    "/user",
    ({ body }) => {
      return createUser(body);
    },
    {
      body: createUserSchema,
    },
  );

  // Update user
  app.patch(
    "/user",
    ({ body }) => {
      return updateUser(body);
    },
    {
      body: updateUserSchema,
    },
  );

  // Delete user
  app.delete(
    "/user",
    ({ body }) => {
      return deleteUser(body);
    },
    { body: selectUserByIdSchema },
  );
};
