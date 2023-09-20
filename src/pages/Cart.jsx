/* eslint-disable react/prop-types */
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart() {
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
      {addCart.length <= 0 ? (
        <div className='container p-5 text-center'>
          <p className='fs-1 fw-bold'>Cart is Empty</p>
          <p className='fs-1'>
            <ShoppingCartIcon style={{ fontSize: '40rem' }} />
          </p>
          <Link to='/Products'>
            <button className='btn btn-dark p-2 fs-3'>Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className='container w-50 d-flex flex-column mt-3 align-items-center'>
          <Link to='/Products'>
            <button className='btn btn-dark mb-3'>Continue Shopping</button>
          </Link>
          {addCart.map((product) => (
            <div
              className='card d-flex flex-row mb-2 bg-light border-rounded border-dark'
              key={product.id}>
              <img
                className='img-fluid w-25 rounded-start'
                src={product.imgURL}
                alt={product.title}
              />
              <div className='container d-flex flex-column p-1 text-center align-items-center '>
                <p className='fs-1 fw-bold'>{product.title}</p>
                <p className='fs-3'>Price: ${product.price}</p>
                <div className='d-flex align-items-center justify-content-center '>
                  <span className='fs-3'>Quantity:</span>
                  <button
                    type='button'
                    className='btn | mx-1 fw-bold fs-1'
                    onClick={() => {
                      decreaseCartQuantity(product.id);
                    }}>
                    -
                  </button>
                  <input
                    className='rounded text-center p-0'
                    type='number'
                    value={product.quantity}
                    readOnly
                  />

                  <button
                    type='button'
                    className='btn | mx-1 fw-bold fs-1'
                    onClick={() => {
                      increaseCartQuantity(product.id);
                    }}>
                    +
                  </button>
                </div>
                <button
                  className='btn align-self-end text-danger'
                  onClick={() => removeItem(product.id)}>
                  <DeleteIcon style={{ fontSize: '3rem' }} />
                </button>
              </div>
              {/* <div className='container d-flex justify-content-end align-items-end align-self-start'>
                <button className='btn' onClick={() => removeItem(product.id)}>
                  <DeleteIcon style={{ fontSize: '4rem' }} />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      )}

      {addCart.length > 0 ? (
        <footer className='bg-dark d-flex flex-row justify-content-end align-items-center fw-bold px-2 p-1'>
          <span className='text-danger fs-3'>
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            className='btn btn-light fw-bold fs-4 ms-3'
            onClick={checkOut}>
            Check Out
          </button>
        </footer>
      ) : null}
    </>
  );
}
