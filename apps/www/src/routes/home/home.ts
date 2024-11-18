import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import { home as homePage } from "./home.page";

export const homeRoute = (app: Elysia) => {
  // Get user
  app.use(html()).get("/", homePage);
};
