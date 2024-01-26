import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {

    return (
        <Card className='flex justify-between items-center px-4 mb-2'>
            <div className='flex items-center gap-2'>
                <CardMedia
                    component="img"
                    alt={`Image ${title}`}
                    height="100"
                    image={imageUrl}
                />
                <div>
                    <Typography variant="subtitle1" component="div">
                        {title}
                    </Typography>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Typography variant="subtitle1" component="div" className='font-medium text-lg text-red-800'>
                    ${price}
                </Typography>
                {handleDelete && (
                    <IconButton onClick={() => handleDelete(id)}>
                        <CloseIcon />
                    </IconButton>
                )}
            </div>
        </Card>
    );
};

OrderCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    handleDelete: PropTypes.func
};
