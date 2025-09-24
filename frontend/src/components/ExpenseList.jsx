import React from "react";
import {Card, CardContent, Typography, List, ListItem, ListItemText, IconButton} from "@mui/material";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
    {expenses.length === 0 ? (
      <Typography
      align="center"
      color="text.secondary"
      sx={{mt:4}}
      >No Expense found</Typography>
    ) : (
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
                <div>
                  <IconButton
                      variant="contained"
                      color="primary"
                      onClick={() => onEdit(ex)}
                    >
                      <FaEdit size={18} color="yellow" />
                    </IconButton>

                  <IconButton
                    edge="end"
                    aria-label="delete"
                    color="error"
                    onClick={() => onDelete(ex._id)}
                  >
                  <FaTrash size={18} color="orange" /> 
                  </IconButton>
                </div>
              }
            >
              <ListItemText
                primary={`${ex.title} - $${ex.amount}`}
                secondary={`Category: ${ex.category} | Date: ${new Date(ex.date).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )}
  </div>
  );
};

export default ExpenseList;
