import { useEffect, useState } from 'react';
import { Container, Typography, Link, Grid, Divider } from '@mui/material';
import logo from './img.png';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Twitter as TwitterIcon } from '@mui/icons-material';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Container component="footer" maxWidth="xl" sx={{ backgroundColor: 'white', py: 4, marginTop: 4 }}>
      {isVisible && (
        <div onClick={() => scrollToTop()} style={{ cursor: 'pointer' }}>
          <Typography variant="body1" color="white">
            Go to start
          </Typography>
        </div>
      )}
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="HelthMate" style={{ height: '48px', marginRight: '8px' }} />
              <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                MegaMarketHub
              </Typography>
              
            </div>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Product
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Address:
                </Typography>
                <Typography>
                9/75B 6th lane,pagoda road ,Nugegoda
                </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Resources
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Services
                </Typography>

              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <div style={{ display: 'flex', mt: '4', justifyContent: 'flex-end', spaceX: '5' }}>

          {/* Add other social icons as needed */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="GitHub"
            href="https://github.com/herath98"  // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/harsha-udayanga-herath-773a07224/"  // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Email"
            href="harshaudayanga401@gmail.com"  // Replace with your email address
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Email"
            href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Email"
            href="#" >
            <TwitterIcon />
          </IconButton>
        </div>
        <Divider sx={{ my: 4 }} />
        <Grid container justifyContent="space-between">
          <Typography variant="body2" color="gray.500" sx={{ textAlign: 'center', flex: '1' }}>
            © 2024
            . All Rights Reserved.
          </Typography>

        </Grid>
      </Container>
    </Container>
  );
};
