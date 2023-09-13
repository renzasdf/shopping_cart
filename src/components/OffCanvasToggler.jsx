/* eslint-disable react/prop-types */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../App';
import TogglerItems from './TogglerItems';

export default function OffCanvasToggler({ isInCart, totalCartQuantity }) {
  const { addCart } = useContext(ShopContext);

  return (
    <>
      <button
        className='btn text-success bg-success-subtle d-lg-none fs-2 custom-end'
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
        className='offcanvas-lg offcanvas-end canvas-display'
        tabIndex='-1'
        id='offcanvasResponsive'
        aria-labelledby='offcanvasResponsiveLabel'>
        {addCart.length <= 0 ? (
          <>
            <div className='offcanvas-header'>
              <span className='offcanvas-title text-success fw-bold'>
                No items in your Cart
              </span>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                data-bs-target='#offcanvasResponsive'
                aria-label='Close'></button>
            </div>
            <div className='offcanvas-body container-fluid d-flex justify-content-center align-items-center'>
              <Link to='/Products'>
                <button
                  className='btn btn-success fs-5'
                  data-bs-dismiss='offcanvas'
                  data-bs-target='#offcanvasResponsive'>
                  Shop Now
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <TogglerItems
              isInCart={isInCart}
              totalCartQuantity={totalCartQuantity}
            />
          </>
        )}
      </div>
    </>
  );
}
