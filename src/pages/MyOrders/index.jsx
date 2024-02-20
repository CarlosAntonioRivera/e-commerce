import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80'>
          <h1>MyOrders</h1>
        </div>

        {context.order.map((order, index) => {
          <Link
            key={index}
            to={`/my-orders/${order.id}`}
          >
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>;
        })}
      </Layout>
    </>
  );
}

export default MyOrders;
