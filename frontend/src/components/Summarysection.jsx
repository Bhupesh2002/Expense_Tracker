import React from "react";

import { Grid, Paper, Typography } from "@mui/material";


const Summarysection = ({expense}) => {
  const totalAmount = expense.reduce((sum, exp) => sum + exp.amount, 0);
  const transactionCount = expense.length;

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6">Total Expenses</Typography>
          <Typography variant="h5" color="error">
            ₹{totalAmount.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>

      <Grid>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6">Transactions</Typography>
          <Typography variant="h5" color="primary">
            {transactionCount}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}


export default Summarysection;