/* eslint-disable react/prop-types */
import { ShopContext } from '../App';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import NavLinks from './NavLinks';
import { useContext, useMemo } from 'react';
import OffCanvasToggler from './OffCanvasToggler';

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
      <nav className='custom-nav | navbar navbar-expand-lg bg-success-subtle text-success px-4'>
        <NavLinks isInCart={isInCart} totalCartQuantity={totalCartQuantity} />
        <OffCanvasToggler
          isInCart={isInCart}
          totalCartQuantity={totalCartQuantity}
        />
      </nav>
    </>
  );
}
