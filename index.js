const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes")
require('dotenv').config();


const app = express();
const PORT = 3000;;

app.use(express.json()); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

connectDB()

app.use("/auth",authRoutes);
app.use("/product",productRoutes);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}` )
})