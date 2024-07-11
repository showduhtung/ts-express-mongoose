import { DB_PORT, DB_DATABASE } from "@config";

export const dbConnection = {
  url: `mongodb://mongo:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
