import mongoose, { connect } from "mongoose";
import { ENV } from "../config/env";

export default async function connectToDB() {
  try {
    await connect(`${ENV.DB_URI}/${ENV.DB_NAME}`);
    const currDB = mongoose.connection.name;
    console.log(`${currDB} database in usage`);
  } catch (err :unknown) {
   if(err instanceof Error){
     console.error(err.message);
    return err;
   } 
   console.error("unkown error", err);
   return err;
  }
}

