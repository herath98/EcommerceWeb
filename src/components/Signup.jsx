// SignupPage.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log(`Signing up with username: ${username} and password: ${password}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          label="Username"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          margin="normal"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSignup} style={{ marginTop: '20px' }}>
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
};

export default SignupPage;
