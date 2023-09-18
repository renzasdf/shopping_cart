/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ShopContext } from '../App';

export default function Items() {
  const { products, handleAddCart } = useContext(ShopContext);
  return (
    <>
      <div className='container grid text-center justify-content-center align-items-center'>
        <div className='row'>
          {products.map((product) => (
            <div
              className='col-lg-3 col-md-4 col-sm-6 mb-5 mt-5 '
              key={product.id}>
              <div className='card justify-content-center w-100 h-100 overflow-hidden'>
                <img
                  className='img-fluid'
                  src={product.image}
                  alt={product.title}
                />
                <span className='fs-4 fw-bold'>{product.title}</span>
                <span className='text-center fs-5 fw-bold'>
                  ${product.price.amount}
                </span>
                <button
                  className='btn btn-dark fw-bold fs-5'
                  onClick={() =>
                    handleAddCart(
                      product.id,
                      product.title,
                      product.image,
                      product.price.amount
                    )
                  }>
                  Add Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
