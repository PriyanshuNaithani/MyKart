import React from 'react';
import CartRow from './CartRow';
function CartList({ cart }) {
  return (
    <div>
      {cart.map(function(item) {
        return (
          <CartRow
            key={item.id}
            {...item}
          />
        );
      })}
    </div>
  );
}
export default CartList;
