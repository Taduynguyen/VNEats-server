import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import UserRoute from '../src/Routes/UserRoute'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

// /api/v1/user
app.use("/api/v1/user", UserRoute)

app.listen(7000, () => {
    console.log("Server started on localhost:7000");
})