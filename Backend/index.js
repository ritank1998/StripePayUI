import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import stripe from "stripe"
import stripeProd from "./router/router.js"
import circularJson from "circular-json"
const app = express()
const port  = 7777
app.use(cors())
app.use(express.json())



app.get("/paisa" , (req,res)=>{
    res.status(500).json(circularJson.stringify("Money Money"))
})

app.use('/stripe' , stripeProd)




app.listen(port , ()=>{
    console.log("Money incoming at port ", port)
})