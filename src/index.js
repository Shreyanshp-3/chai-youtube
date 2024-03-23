// require('dotenv').config({ path: './env' })
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import mongoose from 'mongoose';



dotenv.config({
    path:'./env'
})

// this is like writing the db code in another file and just runining te 
connectDB()


// this is the first way like using the index js to start the server and connect to the database
// import express from "express";
// import { DB_NAME } from './constants.js';
// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("not listning databases", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App listening on ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error;
//     }
// })()