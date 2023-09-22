<<<<<<< HEAD
import { getEvents } from '../api/eventsData';
import { getOrders } from '../api/ordersData';
=======
import { getOrders, searchOrders } from '../api/ordersData';
>>>>>>> main
import addOrderForm from '../components/forms/addOrderForm';
import { emptyEvents, liveEvents } from '../pages/liveEvents';
import { emptyOrders, showOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';

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
      clearDom();
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

  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#searchBar').value.toLowerCase();

    if (e.keyCode === 13) {
      searchOrders(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showOrders(search);
          } else {
            emptyOrders();
          }
        });
    }
  });
  document.querySelector('#search').value = '';
};

export default navigationEvents;
