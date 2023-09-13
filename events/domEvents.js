import getOrders from '../api/ordersData';
import { showOrders } from '../pages/orders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrders(user).then((array) => showOrders(array));
    }

    if (e.target.id.includes('order-details')) {
      console.warn('item details');
    }
  });
};

export default domEvents;
