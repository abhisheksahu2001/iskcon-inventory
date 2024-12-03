import * as dotenv from "dotenv";
import express from "express";
import { turso } from "./db/config.js";
dotenv.config()
const app = express();

app.listen(8000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})