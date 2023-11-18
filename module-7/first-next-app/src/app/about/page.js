import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center">
        About Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
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
          id="bio"
          label="Bio"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default About;
