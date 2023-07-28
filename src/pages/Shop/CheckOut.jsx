import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { useCart } from './cartContext';


export const CheckOut = () => {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product_price, 0);

  return (
    <Layout>
      <div>Checkout</div>
      <div>
        <p>Total Items: {cartItems.length}</p>
        {cartItems.map((item) => (
          <div key={item.product_id}>
            <p>{item.product_name}</p>
            <p>{item.product_price}</p>
          </div>
        ))}
        <div>Total: ${totalPrice}</div>
        <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" title="Make Payment" />
      </div>
    </Layout>
  );
};
