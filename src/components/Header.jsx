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
      <nav className='custom-nav | navbar navbar-expand-lg bg-success-subtle text-success px-4'>
        <Link className='link link-success' to='/'>
          <span className='navbar-brand text-success fs-3 fw-bold'>
            ShopLyft
          </span>
        </Link>

        <Link
          className='custom-end | link link-success display fs-3'
          to='/Cart'>
          <ShoppingCartIcon style={{ fontSize: '2rem' }} />
          {isInCart <= 0 ? (
            <span>({0})</span>
          ) : (
            <span>({totalCartQuantity})</span>
          )}
        </Link>
        <button
          className='btn text-success bg-success-subtle d-lg-none custom-end'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasResponsive'
          aria-controls='offcanvasResponsive'>
          <ShoppingCartIcon style={{ fontSize: '2rem' }} />
          {isInCart <= 0 ? (
            <span>({0})</span>
          ) : (
            <span>({totalCartQuantity})</span>
          )}
        </button>

        <div
          className='offcanvas-lg offcanvas-end'
          tabIndex='-1'
          id='offcanvasResponsive'
          aria-labelledby='offcanvasResponsiveLabel'>
          <div className='offcanvas-header'>
            {addCart.length <= 0 ? (
              <>
                <span className='offcanvas-title text-success fw-bold'>
                  No items in your Cart
                </span>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  data-bs-target='#offcanvasResponsive'
                  aria-label='Close'></button>
              </>
            ) : (
              <>
                <span
                  className='offcanvas-title text-success fw-bold'
                  id='offcanvasResponsiveLabel'>
                  Cart Items
                </span>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  data-bs-target='#offcanvasResponsive'
                  aria-label='Close'></button>

                <div className='offcanvas-body'></div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
