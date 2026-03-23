import express, { Application, Request, Response } from "express";
import { ENV } from "./config/env";
import connectToDB from "./database/mongodb";

import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes"
import productRouter from "./routes/products-apis/product.routes"
import adminProductRouter from "./routes/products-apis/admin.product.routes"
import { User } from "./models/user.model";
import globalExceptionHandler from "./middlewares/globalExceptionHandler";
import Product from "./models/product.model";
// import { products } from "./seedData/products";
import cartRouter from "./routes/cart.routes"

const app: Application = express();
const PORT = ENV.PORT;
const apiVersion = "/api/v1";

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "rentease backend",
  });
});

app.use(`${apiVersion}/auth`, authRouter);
app.use(`${apiVersion}/users`, userRouter)
app.use(`${apiVersion}/products`, productRouter)
app.use(`${apiVersion}/cart`, cartRouter);

// admins only apis
app.use(`${apiVersion}/admin/products`, adminProductRouter)



app.use(globalExceptionHandler);

// app.post("/bulk", async (req, res) => {
//   for (const p of products) {
//   const product = new Product(p);
//   await product.save();
// }
//   res.send('ok');
//   // await User.create({
//   //   name: "john doe",
//   //   email: "john.doe@example.com",
//   //   hashedPassword:
//   //     "$2b$12$K9vB3R7xL8qW2mP5vY9uO.eR3gT5hY7jK9lM1nB3vC5xZ7aQ8wE2r",
//   //   role: "DEVELOPER",
//   // });
// });

app.listen(PORT, async () => {
  console.log(`server is running live at http://localhost:${PORT}`);
  await connectToDB();
});
