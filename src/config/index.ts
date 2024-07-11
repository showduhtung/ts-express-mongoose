import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const CREDENTIALS = process.env.CREDENTIALS === "true";
const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;

export { CREDENTIALS, NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, LOG_FORMAT, LOG_DIR, ORIGIN };
