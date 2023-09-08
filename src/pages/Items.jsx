/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ShopContext } from '../App';

export default function Items() {
  const { products, handleAddCart } = useContext(ShopContext);
  return (
    <>
      <div className='items-grid-container'>
        {products.map((product) => (
          <div className='item-list' key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price.amount}</p>
            <button
              className='addToCart-btn'
              onClick={() =>
                handleAddCart(
                  product.id,
                  product.title,
                  product.image,
                  product.price.amount
                )
              }>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
