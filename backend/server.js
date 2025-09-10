const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const expenseRoutes = require("./routes/expenseRoutes");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/expenses",expenseRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then( ()=> console.log("MongoDB Connected Successfully"))
    .catch( (err)=>console.log(err));


const PORT = process.env.PORT || 5000;

app.listen( PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});