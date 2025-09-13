import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { FaTrash } from "react-icons/fa";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense History
        </Typography>

        <List>
          {expenses.map((ex) => (
            <ListItem
              key={ex._id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  color="error"
                  onClick={() => onDelete(ex._id)}
                >
                <FaTrash size={18} color="orange" /> 
                </IconButton>
              }
            >
              <ListItemText
                primary={`${ex.title} - $${ex.amount}`}
                secondary={`Category: ${ex.category} | Date: ${ex.date}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;
