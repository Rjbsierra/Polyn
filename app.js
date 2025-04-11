const express = require('express');
const app  = express();
require('dotenv').config();
const {connectDB} = require('./server/db');
const cors = require('cors')
const route = require('./server/routes/main')


app.use(cors())

app.use(route)


const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URI)

        app.listen(process.env.PORT, () =>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    }catch(err){
        console.log(err);
    }
}

start();