import { getEvents } from '../api/eventsData';
import { getOrders } from '../api/ordersData';
import addOrderForm from '../components/forms/addOrderForm';
import { emptyEvents, liveEvents } from '../pages/liveEvents';
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

  document.querySelector('#live-events-page').addEventListener('click', () => {
    getEvents(user.uid).then((array) => {
      if (array.length) {
        liveEvents(array);
      } else {
        emptyEvents();
      }
    });
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });
};

export default navigationEvents;
