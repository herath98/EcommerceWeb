/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Badge, Container, Box, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { Context } from '../context';

const activeStyle = 'underline underline-offset-4';
import Image from './img.png';

export const NavBar = () => {
  const context = useContext(Context);

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="lg">
        <Toolbar>
          <img src={Image} alt="MegaMarketHub" style={{ height: '48px', marginRight: '12px' }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <RouterNavLink to="/" onClick={() => context.setSearchByCategory()}>
              MegaMarketHub
            </RouterNavLink>
          </Typography>

          <ul style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <li>
              <RouterNavLink
                to="/"
                onClick={() => context.setSearchByCategory()}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/laptops"
                onClick={() => context.setSearchByCategory('laptops')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Laptop
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/tablets"
                onClick={() => context.setSearchByCategory('tablets')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Tablets
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/cameras"
                onClick={() => context.setSearchByCategory('cameras')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cameras
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/headphones"
                onClick={() => context.setSearchByCategory('headphones')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Headphones
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/cellphones"
                onClick={() => context.setSearchByCategory('cellphones')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cellphones
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/accessories"
                onClick={() => context.setSearchByCategory('accessories')}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Accessories
              </RouterNavLink>
            </li>
          </ul>

          <ul style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            
            <li>
              <RouterNavLink
                to="/my-orders"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Orders
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/login"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Log
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/sign-in"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Sign
              </RouterNavLink>
            </li>
            <li>
              <RouterNavLink
                to="/cart-shopping"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <IconButton color="inherit">
                  <Badge
                    badgeContent={context.productsCount}
                    color="primary"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </RouterNavLink>
              {context.productsCount === 0 ? (
                <Box className="flex justify-center items-center text-xs font-semibold">
                  {context.productsCount}
                </Box>
              ) : (
                <Box className="flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold">
                  {context.productsCount}
                </Box>
              )}
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
