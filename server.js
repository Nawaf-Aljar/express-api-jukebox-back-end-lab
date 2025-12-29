const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()

async function conntectToDB(){ 
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

conntectToDB()

const truckCtrl = require("./controllers/tracks")

const morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.json())

app.use("/trucks", truckCtrl)

app.listen(3000,()=>{
    console.log('App is running on port 3000')
})
