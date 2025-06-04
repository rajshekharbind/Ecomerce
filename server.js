import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js';

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => res.json({ message: 'this is a home route' }));

// User Routes
app.use('/api/user', userRouter);

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://rajurajsekhar123:OFD0uhvoCWfiyUSx@cluster0.gjyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    dbName: "MERN_E_commerce"
  }
)
.then(() => console.log("MongoDB Connected Successfully.."))
.catch((err) => console.error("MongoDB connection error:", err));

// Server
const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
