//imports packages
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
//files import
import cors from 'cors';
import morgan from 'morgan';
import "express-async-errors";
//file import
import connectDB from './config/db.js';



//routes import
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoute.js'
import errorMiddleware from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoute.js';
import jobsRoutes from './routes/jobsRoute.js';
//config dotenv
dotenv.config();

// MongoDb connection
connectDB();

//rest object
const app = express()
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//router
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoutes);

//validation middleware
app.use(errorMiddleware);
//port
const PORT = process.env.PORT || 8080; 

//listen
app.listen(PORT, ()=>{
    console.log(`node server is running in ${process.env.DEV_MODE} port no ${PORT}`.bgBlue)
})



