import app from './app'
import { ENV } from "./common/config/env";
import connectToDB from "./database/mongodb";

const PORT = ENV.PORT;


app.listen(PORT, async () => {
  console.log(`server is running live at http://localhost:${PORT}`);
  await connectToDB();
});
