/* eslint-disable no-alert */
import { getEvents } from '../api/eventsData';
import { getOrders, searchOrders } from '../api/ordersData';
import addOrderForm from '../components/forms/addOrderForm';
import { emptyEvents, liveEvents } from '../pages/liveEvents';
import { emptyOrders, showOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';
import homePage from '../pages/home';

const navigationEvents = (user) => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(user.uid).then((array) => {
      if (array.length) {
        showOrders(array, user);
      } else {
        emptyOrders();
      }
    });
  });

  document.querySelector('#live-events-page').addEventListener('click', () => {
    getEvents(user.uid).then((array) => {
      clearDom();
      if (array.length) {
        liveEvents(array, user);
      } else {
        emptyEvents();
      }
    });
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });

  document.querySelector('#navbar-logo').addEventListener('click', () => {
    clearDom();
    homePage(user);
  });

  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#searchBar').value.toLowerCase();

    if (e.keyCode === 13) {
      searchOrders(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showOrders(search, user);
          } else {
            emptyOrders();
          }
        });
    }
  });
  document.querySelector('#search').value = '';
};

export default navigationEvents;
