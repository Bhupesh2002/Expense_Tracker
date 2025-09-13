import React, { useState } from "react";
import axios from "axios";
import {TextField, Button, Card, CardContent, Typography,} from "@mui/material";

const ExpenseForm = ({ onExpenseAdded }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
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
      setAmount("");
      setCategory("");
      setDate("");
    } catch (err) {
      console.log("Error Adding Expense :", err);
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
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
            onChange={(e) => setAmount(e.target.value)}
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Expense
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
