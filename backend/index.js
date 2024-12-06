import * as dotenv from "dotenv";
import express from "express";
import route from "./api/route";
dotenv.config()
const app = express();

app.use('/api', route);

app.listen(8000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

