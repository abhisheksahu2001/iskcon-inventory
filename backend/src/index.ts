import * as dotenv from "dotenv";
import express from "express";
import route from "./api/route";
import cors from 'cors';

dotenv.config()
const app = express();

app.use(cors({
  origin: 'http://localhost:4200',  // Allow only requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific methods
  credentials: true  // If you want to allow cookies and authorization headers
}));

app.use(express.json());
app.use('/api', route);

app.listen(8000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`http://localhost:8000`)
})

