import React, { useState } from "react";
import { Container } from "@mui/material";
import Pageheader from "../Pageheader";
import { useNavigate } from "react-router-dom";
import Summarysection from "../Summarysection";

const Homepage = ({expenses}) => {
    
  const navigate = useNavigate();

  const handleAddExpenseClick = () => {
    navigate("/add_expense");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Pageheader 
        title="Expense Tracker Dashboard" 
        onAddExpense={handleAddExpenseClick} 
      />
      <Summarysection expense={expenses}/>
    </Container>
  );
};

export default Homepage;
