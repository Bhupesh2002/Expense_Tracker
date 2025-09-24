import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpensesPage from "./components/pages/Expensepage";
import Homepage from "./components/pages/Homepage";
import ExpenseForm from "./components/ExpenseForm";
import useExpenseHandlers from "./components/hooks/ExpenseHook";

function App() {

  const { expense, handleDelete, handleEdit } = useExpenseHandlers();
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage expenses={expense}/>}/>
        <Route path="/add_expense" element={ <ExpenseForm/> }/>
        <Route path="/expenses" element={ <ExpensesPage expenses={expense}  
        onDelete={handleDelete} onEdit={handleEdit}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
