import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/expenses";

export default function useExpenseHandlers() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(API_URL);
        setExpense(response.data);
      } catch (err) {
        console.error("Error Fetching Data:", err);
      }
    };
    fetchExpenses();
  }, []);

//   const handleExpenseAdded = (newExpense) => {
//     setExpense((prev) => [...prev, newExpense]);
//   };


  const handleEdit = async (id, updatedExpense) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedExpense);
        const updated = response.data;

        console.log(updated);

        setExpense((prev) =>
        prev.map((ex) => (ex._id === id ? updated : ex))
        );
    } catch (err) {
        console.error("Error Editing Expense:", err);
    } 
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setExpense((prev) => prev.filter((ex) => ex._id !== id));
    } catch (err) {
      console.error("Error Deleting Expense:", err);
    }
  };




  return { expense, handleDelete, handleEdit };
}
