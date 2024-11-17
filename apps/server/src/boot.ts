import { Elysia } from "elysia";

export const boot = (app: Elysia) => {
    console.log(
      `App is running at ${app.server?.hostname}:${app.server?.port}`
    );
};