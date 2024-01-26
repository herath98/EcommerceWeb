/* eslint-disable react/prop-types */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Container } from '@mui/material';
import Image from './img.png';

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = '#',
}) {
  return (
    <Container component="div" maxWidth="sm" sx={{ mb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img alt="" src={Image} style={{ height: '3.5rem', width: '3.5rem' }} />
      </Box>
      <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        {heading}
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 5 }}>
        {paragraph}{' '}
        <Link component={RouterLink} to={linkUrl} underline="hover" color="primary" sx={{ fontWeight: 'medium' }}>
          {linkName}
        </Link>
      </Typography>
    </Container>
  );
}
