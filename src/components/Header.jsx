/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { ShopContext } from '../App';

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
      <header>
        <ul>
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='link notification-badge' to='/Cart'>
              Cart
              {isInCart && <span className='badge'>{totalCartQuantity}</span>}
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
