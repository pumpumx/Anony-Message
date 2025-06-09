import mongoose from "mongoose";


type connectionObject = {
    isConnected?:number
}

const connection:connectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Database already connected")
        return
    }
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URL || "" ,{});
        console.log("db values " , dbConnection)
        connection.isConnected = dbConnection.connections[0].readyState;
        console.log("Db connection Successfuly")
    } catch (error) {
        console.log("Db connection failed")
        process.exit(1);
    }
}

export default dbConnect