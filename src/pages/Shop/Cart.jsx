import React from 'react'
import { Layout } from '../../components/Layout'
import { CartCard } from './CartCard'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useCart } from './cartContext';

export const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  const removeFromCart = (itemId) => {
    console.log(cartItems)
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== itemId));
    console.log(cartItems);
  };

  return (
    <Layout>
      <div>Cart</div>
      <div>
        <p>Items in Cart: {cartItems.length}</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cartItems.map((item) => (
          <div key={item.product_id}>
            <CartCard
              id={item.product_id}
              title={item.product_name}
              price={item.product_price}
              imageUrl={item.imageURL}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
        </div>        
        <Link to='/checkout'>
          <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" title="Check Out" />
        </Link>
      </div>
    </Layout>
  )
}