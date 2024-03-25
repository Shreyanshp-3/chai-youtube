import express from 'express';
import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';

const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
        // the current application is running on a process to exit that  process we use process.exit to exit from it like on type of index in the application
    }

}

export default connectDB




