import { Container, Typography } from "@mui/material";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";

const ExpensesPage = ({ expenses, onDelete, onEdit }) => {
  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom sx={{ mt: 3 }} color="primary.main" fontWeight="300">
        Expense Tracker
      </Typography>

      <ExpenseForm  />
      <ExpenseList expenses={expenses} onDelete={onDelete} onEdit={onEdit} />
    </Container>
  );
};

export default ExpensesPage;
