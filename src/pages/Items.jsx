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
              className='col-lg-3 col-md-4 col-sm-12 mb-5 mt-5 '
              key={product.id}>
              <div className='card justify-content-center w-100 h-100 bg-success-subtle'>
                <span className='fs-4 fw-bold text-success'>
                  {product.title}
                </span>
                <img
                  className='img-fluid'
                  src={product.image}
                  alt={product.title}
                />

                <span className='text-center text-success fs-5 fw-bold'>
                  Price: ${product.price.amount}
                </span>
                <button
                  className='btn btn-success fw-bold fs-5'
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
