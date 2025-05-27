import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);

export async function connectDB(){
    try{
        await client.connect();
        console.log("Conectado a MongoDB");
        return client.db("")
    }catch(error){
        console.error("Error al conectar",error);
    }
}