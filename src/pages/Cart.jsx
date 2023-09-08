/* eslint-disable react/prop-types */
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';

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
      <div className='cart-grid-container'>
        {addCart.map((product) => (
          <div className='cart-list' key={product.id}>
            <img src={product.imgURL} alt={product.title} />
            <div className='item-info'>
              <h1 className='item-title'>{product.title}</h1>
              <p className='item-price'>Price: ${product.price}</p>
              <div className='btn-container'>
                <button
                  onClick={() => {
                    decreaseCartQuantity(product.id);
                  }}
                  className='btn'>
                  -
                </button>
                <input
                  type='text'
                  value={product.quantity}
                  placeholder='0'
                  readOnly
                />
                <button
                  onClick={() => {
                    increaseCartQuantity(product.id);
                  }}
                  className='btn'>
                  +
                </button>
              </div>
              <div className='total-price'>
                <b>Total:</b>
                <p>{(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
            <div className='remove'>
              <button onClick={() => removeItem(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {addCart.length > 0 ? (
        <footer>
          <p>Total: {totalPrice.toFixed(2)}</p>
          <button onClick={checkOut}>Check Out</button>
        </footer>
      ) : null}
    </>
  );
}
