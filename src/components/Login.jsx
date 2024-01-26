// LoginPage.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
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
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
