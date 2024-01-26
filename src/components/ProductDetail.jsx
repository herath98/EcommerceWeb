
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';

export const ProductDetail = () => {
  const context = useContext(Context);

  const handleClose = () => {
    context.closeProductDetail();
  };

  return (
    <Dialog open={context.isProductDetailOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="div">
            {context.showProductDetail.title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography variant="body2" color="textSecondary">
          {context.showProductDetail.category}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <div className="flex flex-row justify-between items-center mt-4 mb-6 px-4">
          <div className="flex flex-row items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon key={index} className={context.showProductDetail.rate >= index ? 'good' : 'bad'} />
            ))}
          </div>
          <Typography variant="h6" color="primary">
            ${context.showProductDetail.price}
          </Typography>
        </div>

        <div className="flex justify-center items-center p-4">
          <img
            className="h-40 max-w-xs rounded-lg"
            src={context.showProductDetail?.images?.[0]}
            alt={`image ${context.showProductDetail?.title}`}
          />
        </div>

        <Typography variant="body1" className="p-4">
          {context.showProductDetail.description}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Link to={`/product/${context.showProductDetail.id}`} className="flex justify-center">
          <Button onClick={handleClose} variant="contained" color="primary">
            See more details
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};
