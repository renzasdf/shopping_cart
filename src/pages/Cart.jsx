/* eslint-disable react/prop-types */
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';

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
          <p className='text-success fs-1 fw-bold'>No items in your Cart</p>
        </div>
      ) : (
        <div className='container d-flex flex-column bg-success p-4 mt-3'>
          {addCart.map((product) => (
            <div
              className='card h-25 w-100 d-flex flex-row bg-light mb-5 text-success align-items-center'
              key={product.id}>
              <img
                className='img-fluid h-25 w-25 rounded-start'
                src={product.imgURL}
                alt={product.title}
              />
              <div className='container d-flex flex-column py-5'>
                <p className='fs-1 fw-bold'>{product.title}</p>
                <p className='fs-3'>Price: ${product.price}</p>
                <div className='d-flex flex-column'>
                  <p className='fs-3'>Qty: {product.quantity}</p>
                  <div>
                    <button
                      type='button'
                      className='btn p-0 mr-4 fs-2 text-success'
                      onClick={() => {
                        increaseCartQuantity(product.id);
                      }}>
                      +
                    </button>
                    <button
                      className='btn p-0 ms-4 fs-2 text-success'
                      onClick={() => {
                        decreaseCartQuantity(product.id);
                      }}>
                      -
                    </button>
                  </div>
                </div>

                {/* <div className='container p-0'>
                  <button
                    type='button'
                    className='btn mr-3 fs-2 btn-lg text-success'
                    onClick={() => {
                      increaseCartQuantity(product.id);
                    }}>
                    +
                  </button>
                  <button
                    className='btn mx-3 fs-2 btn-lg text-success'
                    onClick={() => {
                      decreaseCartQuantity(product.id);
                    }}>
                    -
                  </button>
                </div> */}
              </div>
              <div className='container d-flex justify-content-end align-items-end align-self-end'>
                <button
                  className='btn text-success'
                  onClick={() => removeItem(product.id)}>
                  <DeleteIcon style={{ fontSize: '4rem' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {addCart.length > 0 ? (
        <footer className='bg-success-subtle d-flex flex-row justify-content-end align-items-center fw-bold text-success px-2'>
          <span className='text-danger fs-3'>
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            className='btn btn-success fw-bold fs-4 ms-3'
            onClick={checkOut}>
            Check Out
          </button>
        </footer>
      ) : null}
    </>
  );
}
