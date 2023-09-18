/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavLinks({ isInCart, totalCartQuantity }) {
  return (
    <>
      <Link className='link' to='/'>
        <span className='navbar-brand text-light fs-2 fw-bold'>ShopLyft</span>
      </Link>

      <Link
        className='custom-end display | link text-light fs-2 fw-bold'
        to='/Cart'>
        <ShoppingCartIcon style={{ fontSize: '2rem' }} />
        {isInCart <= 0 ? (
          <span>({0})</span>
        ) : (
          <span>({totalCartQuantity})</span>
        )}
      </Link>
    </>
  );
}
