require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRouter");
const logger = require("morgan");

connectDB();

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/api/products", productRouter);
app.get('/' , (req , res)=>{
    res.send('hello updated4')
  })
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
