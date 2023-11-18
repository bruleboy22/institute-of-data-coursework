import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  const submitForm = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center">
        Login
      </Typography>
      <form onSubmit={submitForm}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
