import express from "express";
import type { Request, Response } from "express";
import app from "./app.ts";
import { ENV } from "./config/env.ts";
import connectDB from "./config/mongodb.ts";

const PORT: number = ENV.PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "rentease-new backend is live",
  });
});

app.listen(PORT, async()=>{
  await connectDB();  
     console.log(`server is running live at http://localhost:${PORT}`);
})