import App from "@/app";
import IndexRoute from "@routes/index.route";
import UsersRoute from "@routes/users.route";
import { cleanEnv, port, str } from "envalid";

cleanEnv(process.env, { NODE_ENV: str(), PORT: port() });

const app = new App([new IndexRoute(), new UsersRoute()]);

app.listen();
