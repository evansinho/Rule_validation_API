import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

// Instantiate the app
const app = express();
// Define our app port.
const port = process.env.PORT || 3000;

// db config
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// middlewares

// API endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello its me')
})

// listener
app.listen(port, () => console.log(`Server is listening on port ${port}`));