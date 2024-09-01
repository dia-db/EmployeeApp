import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Home, Add } from '@mui/icons-material'; 
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#8A2BE2' }}> 
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Button color="inherit" component={Link} to="/">
          <Home />
        </Button>
        <Button color="inherit" component={Link} to="/add">
          <Add />
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
