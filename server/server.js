import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"



import {User} from "./components/user.js" 
console.log(User)
 

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.API)
    .then(() => {
        console.log("connection done")
    })
    .catch(() => {
        console.log("connection fail")
    })


app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    const user = new User
   
   (req.body).save()
   
console.log(req.body)
    
    res.send('Hello World!')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})