import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Breadcrumbs, Grid, IconButton } from '@mui/material';
import { Layout, OrderCard } from '../components';
import { ChevronRight as ChevronRightIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import { Context } from '../context';
import { GoToTop } from '../utils';

export const OrderPage = () => {
  const context = useContext(Context);
  GoToTop();

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  return (
    <Layout>
      <Grid container justifyContent="center" alignItems="center" sx={{ fontLight: true, width: '50%', position: 'relative' }}>
        <Typography variant="h4" fontWeight="bold" mb={5}>
          Order
        </Typography>
        <Link to='/my-orders' className='absolute right-0'>
          <ChevronRightIcon sx={{ fontSize: 20, color: 'black' }} />
        </Link>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" mt={10} sx={{ width: '50%' }}>
        {context.order?.[index]?.products.map((prod) => (
          <OrderCard
            key={prod.id}
            id={prod.id}
            // title={prod.title}
            imageUrl={prod.images?.[0]}
            price={prod.price}
          />
        ))}
      </Grid>
    </Layout>
  );
};
