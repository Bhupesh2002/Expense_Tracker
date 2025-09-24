import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Pageheader = ({ title, onAddExpense }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        {title}
      </Typography>

      <Button variant="contained" color="primary" onClick={onAddExpense}>
        + Add Expense
      </Button>
    </Box>
  );
};

export default Pageheader;
