import * as dotenv from "dotenv";
import express from "express";
import { categoryTable } from "./Repo/database.js";
dotenv.config()
const app = express();
categoryTable();
app.listen(8000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
