import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor:"primary" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color:"white"}}>
          Expense Tracker
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/expenses">
          Expenses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
