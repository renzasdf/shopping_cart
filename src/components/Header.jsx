/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Header() {
  const {
    addCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    checkOut,
    removeItem,
  } = useContext(ShopContext);

  const isInCart = addCart.length > 0;

  const totalCartQuantity = useMemo(() => {
    return Object.values(addCart).reduce(
      (total, quantity) => total + quantity.quantity,
      0
    );
  }, [addCart]);

  const totalPrice = useMemo(() => {
    return addCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [addCart]);

  return (
    <>
      <nav className='custom-nav | navbar navbar-expand-lg bg-success-subtle text-success px-4'>
        <Link className='link link-success' to='/'>
          <span className='navbar-brand text-success fs-2 fw-bold'>
            ShopLyft
          </span>
        </Link>

        <Link
          className='custom-end | link link-success display fs-2 fw-bold'
          to='/Cart'>
          <ShoppingCartIcon style={{ fontSize: '2rem' }} />
          {isInCart <= 0 ? (
            <span>({0})</span>
          ) : (
            <span>({totalCartQuantity})</span>
          )}
        </Link>
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
            </>
          ) : (
            <>
              <div className='offcanvas-header'>
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
              </div>

              <div className='offcanvas-body bg-success-subtle p-0 container'>
                {addCart.map((product) => {
                  return (
                    <div
                      className='container p-0 my-3 d-flex bg-success'
                      key={product.id}>
                      <img
                        src={product.imgURL}
                        alt=''
                        className='img-fluid h-50 w-50'
                      />
                      <div className='container d-flex flex-column mt-3 text-light'>
                        <span className='fs-4 fw-bold text-light'>
                          {product.title}
                        </span>
                        <span>Price: {product.price}</span>
                        <span className='d-flex justify-content-between align-items-center'>
                          <div className='col-6'>
                            <span className=''>Qty: </span>
                            <span className=' mx-1'>{product.quantity}</span>
                          </div>
                          <div className='d-flex col-6 justify-content-end'>
                            <button
                              className='btn text-light p-0 fs-4 mx-2'
                              onClick={() => {
                                increaseCartQuantity(product.id);
                              }}>
                              +
                            </button>
                            <button
                              className='btn text-light p-0 fs-4 mx-2'
                              onClick={() => {
                                decreaseCartQuantity(product.id);
                              }}>
                              -
                            </button>
                          </div>
                        </span>
                        <div className='container p-0 h-100 d-flex align-items-end justify-content-end'>
                          <button
                            className='btn bg-success text-light p-0 mb-1'
                            onClick={() => removeItem(product.id)}>
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className='custom-footer ps-1 bg-success-subtle text-success fw-bold'>
                  <p>Total: {totalPrice.toFixed(2)}</p>
                  <button
                    className='btn fw-bold text-success'
                    onClick={checkOut}>
                    Check Out
                  </button>
                </div> */}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
