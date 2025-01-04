import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import connectMongodb from "./config/db.js";
import authRoutes from "./routes/api/auth.js"

dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI || 'mongodb://localhost:27017/freelance-service';

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', 
};

app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors(corsOptions));
app.use('/api/auth',authRoutes);
app.listen(PORT,()=> console.log(`Server is running on ${PORT}`));
connectMongodb(MONGO_URI);