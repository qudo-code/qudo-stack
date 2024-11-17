import { Elysia } from "elysia";
import { createAccount } from "./routes/create-account";
import { getAccount } from "./routes/get-account";

const routes = [
    createAccount,
    getAccount
];

export const router = (app: Elysia) => {
    for (const route of routes) {
        route(app);
    }
}
