import express from 'express'
import dotenv from 'dotenv'
import { ConnectDb } from './DB/ConnectDB.js'
import userRouter from './routes/userRouter.js';
import cors from 'cors'
dotenv.config()
const app = express();
const port = process.env.PORT
const dbstring = process.env.DBSTRING
const dbname = process.env.DBNAME

app.use(cors())

ConnectDb(dbstring,dbname)

app.use(express.json())

app.use('/user',userRouter)

app.listen(port , ()=>{
    console.log(`Server running on port ${port}`)
})