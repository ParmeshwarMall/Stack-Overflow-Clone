import dotenv from "dotenv";
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
dotenv.config();

const app=express();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

main()
    .then(() => app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/StackOverflowClone");
}

