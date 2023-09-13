import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';

export default function TogglerItems() {
  const {
    addCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItem,
    checkOut,
  } = useContext(ShopContext);
  const totalPrice = useMemo(() => {
    return addCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [addCart]);
  return (
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

      <div className='offcanvas-body bg-success-subtle p-0 container position-relative'>
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
                <span className='fs-4 fw-bold text-light'>{product.title}</span>
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
        <div
          className={`custom-footer ps-1 text-success fw-bold d-flex justify-content-between bg-light ${
            addCart.length === 1 ? 'position-absolute' : 'sticky-bottom'
          }`}>
          <span>Total: {totalPrice.toFixed(2)}</span>
          <button className='btn fw-bold text-success' onClick={checkOut}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
