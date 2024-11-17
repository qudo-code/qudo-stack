import { Elysia } from "elysia";
import { router } from "./router";
import { boot } from "./boot";

// Create app
const app = new Elysia();

// Attach routes
router(app);

// Start app 
app.listen(3000);

// Things to do on boot
boot(app);
