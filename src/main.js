import { Hono } from "hono";
import { cors } from "hono/cors";
// TODO: import compression from "compression";
import { router } from "./routes";
import { errorHandlers } from "./middlewares/errorHandlers";
import config from "./config";

const app = new Hono();
app.use("*", cors());
app.route("/", router);
app.use("*", (c, next) => errorHandlers(c, next));
app.onError((err, c) => {
  console.error("Global Aplication Error :>> ", err);
  return c.text("App Error Message", 500);
});

console.log(
  `App: ${config.APP_NAME} v${config.APP_VERSION} listening to port ${config.NODE_PORT} - BUN JS | REST 🚀`
);

export default {
  fetch: app.fetch,
  port: 3000,
};
