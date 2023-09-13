import { getOrders } from '../api/ordersData';
import addOrderForm from '../components/forms/addOrderForm';
import { emptyOrders, showOrders } from '../pages/orders';

const navigationEvents = (user) => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(user.uid).then((array) => {
      if (array.length) {
        showOrders(array);
      } else {
        emptyOrders();
      }
    });
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });
};

export default navigationEvents;
