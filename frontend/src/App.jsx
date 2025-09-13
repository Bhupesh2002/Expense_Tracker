import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

function App() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/expenses");
        setExpense(response.data);
      } catch (err) {
        console.error("Error Fetching Data:", err);
      }
    };
    fetchExpenses();
  }, []);

  const handleExpenseAdded = (newExpense) => {
    setExpense((prev) => [...prev, newExpense]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/expenses/${id}`);
      setExpense((prev) => prev.filter((ex) => ex._id !== id));
    } catch (err) {
      console.error("Error Deleting Expense:", err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 3 }}>
        Expense Tracker
      </Typography>

      <ExpenseForm onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expense} onDelete={handleDelete} />
    </Container>
  );
}

export default App;
