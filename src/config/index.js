import info from "../../package.json";

const { NODE_PORT, TOKEN_SECRET } = process.env;

export default {
  APP_NAME: info.name,
  APP_VERSION: info.version,
  NODE_PORT,
  TOKEN_SECRET,
};
