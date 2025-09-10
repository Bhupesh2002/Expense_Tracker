const Expense = require("../models/Expense");

let createExpense = async(req,res)=> {
    try{
        const {title, amount, category, date} = req.body;
        const expense = new Expense({
            title,
            amount,
            category, 
            date: date || Date.now(), 
        });
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};


let getExpenses = async(req,res) => {
    try{
        const expenses = await Expense.find().sort({date:-1});
        res.json(expenses);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

let getExpenseById = async(req,res) => {
    try{
        const expense = await Expense.findById(req.params.id);
        if(!expense) return res.status(404).json({message:"Expense Not Found"});
        res.json(expense);
    }
    catch(err){
        res.status(500).json({error:err.message});
    };
}


let updateExpense = async(req,res) => {
    try{
        const updateExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!updateExpense) return res.status(401).json({message:"Expense Not Found.."});
        res.json(updateExpense);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

const deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense};