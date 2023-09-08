/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  const { addCart } = useContext(ShopContext);

  const isInCart = addCart.length > 0;

  const totalCartQuantity = useMemo(() => {
    return Object.values(addCart).reduce(
      (total, quantity) => total + quantity.quantity,
      0
    );
  }, [addCart]);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-success-subtle px-3'>
        <span className='navbar-brand text-success fs-3 fw-bold'>ShopLyft</span>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarToggleExternalContent'>
          <ul className='navbar-nav ml-auto fs-4'>
            <li className='nav-item'>
              <Link className='link link-success' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='link notification-badge link-success' to='/Cart'>
                Cart
                <ShoppingCartIcon />
                {isInCart && <span className='badge'>{totalCartQuantity}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
