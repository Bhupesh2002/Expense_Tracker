const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please Enter a Title"],
        },
        amount:{
            type:Number,
            required:[true,"Please Enter a Amount"],
        },
        category:{
            type:String,
            required:[true,"Please Enter a category"],
        },
        date:{
            type:Date,
            default:Date.now,
        },
    });

module.exports = mongoose.model("Expense",expenseSchema);