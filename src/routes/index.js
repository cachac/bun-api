import { Hono } from "hono";
import { jwt } from "hono/jwt";
import config from "../config";
import { TEST, TEST_ERROR } from "../controllers/test";

export const router = new Hono();

const secret = config.TOKEN_SECRET;
router.use("/auth/*", jwt({ secret }));

// to use JWT in all paths
//router.use("*", jwt({ secret }));

router.get("/healthcheck", (c) =>
  c.json({ app: config.APP_NAME, version: config.APP_VERSION })
);
router.post("/auth/test", (c, next) => TEST(c, next));
router.post("/error", (c, next) => TEST_ERROR(c, next));
