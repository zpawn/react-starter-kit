import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';

/**
 * @param onSubmit {Function}
 * @return {JSX.Element}
 * @constructor
 */
export const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onSubmitAuth = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <form onSubmit={onSubmitAuth}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Sign in
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email"
            type="text"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
            value={password}
            onChange={onChangePassword}
          />
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              SignIn
            </Button>
          </Box>
        </Container>
      </Box>
    </form>
  );
};
