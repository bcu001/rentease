import mongoose,{connect} from "mongoose";
import { ENV } from "./env.ts";
import dns from 'dns';

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

export default async function connectDB(){
    try { 
        await connect(`${ENV.DB_URI}/${ENV.DB_NAME}`)
        console.log(`Database name: ${mongoose.connection.name}`)
    } catch(err:unknown){
        console.error( err);
        return err;
    }
}