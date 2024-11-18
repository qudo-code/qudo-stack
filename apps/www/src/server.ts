import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userRoutes } from "./routes/user";
import { homeRoute } from "./routes/home/home";

// Create app
const app = new Elysia();

app.trace(async ({ onHandle }) => {
  onHandle(({ begin, onStop, name }) => {
    onStop(({ end }) => {
      console.log(`${name} handle took ${end - begin}ms`);
    });
  });
});

app.use(swagger());

// Attach routers
userRoutes(app);
homeRoute(app);

// Start app
app.listen(3000);

// Things to do on boot
export const boot = (app: Elysia) => {
  console.log(
    `qudo is running at http://${app.server?.hostname}:${app.server?.port}`,
  );
};

boot(app);
