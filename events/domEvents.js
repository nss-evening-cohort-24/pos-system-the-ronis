import { getOrders } from '../api/ordersData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrders(user).then((array) => showOrders(array));
    }

    if (e.target.id.includes('home-create-orders-btn')) {
      addOrderForm();
    }
  });
};

export default domEvents;
