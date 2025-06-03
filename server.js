import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'




const app = express();
 app.use(bodyParser.json())

 
//home testing
app.get('/',(req,res)=>res.json({message:'this is a home routes'}))



//user Router
app.use('/api/user',userRouter)



mongoose.connect(
  "mongodb+srv://rajurajsekhar123:OFD0uhvoCWfiyUSx@cluster0.gjyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    dbName:"MERN_E_commerce"
  }
).then(()=>console.log("Mongodb Connected Successfully..")).catch((err)=>console.log(err));



const port= 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))