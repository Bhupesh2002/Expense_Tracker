import React, { useState } from "react";
import axios from "axios";
import {TextField, Button, Card, CardContent, Typography, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpenseForm = ({ onExpenseAdded }) => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newExpense = { title, amount, category, date };
      const response = await axios.post("http://localhost:5000/expenses", newExpense);

      console.log(response.data);
      onExpenseAdded(response.data);

      setTitle("");
      setAmount(0);
      setCategory("");
      setDate("");
    } catch (err) {
      console.log("Error Adding Expense :", err);
    }
  };

  return (
    <Card elevation={7} sx={{ maxWidth: 500, margin: "20px auto"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add Expense
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Amount"
            placeholder="Enter the Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Category"
            placeholder="Enter the Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />


          <Box sx={{ display: "flex", justifyContent: "space-between", gap:2, mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" sx={{flex:1}} >Add Expense</Button>
            <Button variant="contained" color="error"onClick={() => navigate("/")} sx={{flex:1}}>Back</Button>
          </Box>

        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
