import addOrderForm from '../components/forms/addOrderForm';
/* eslint-disable no-alert */
import { getOrders, deleteOrders } from '../api/ordersData';
import { showOrders } from '../pages/orders';
import { getItems, deleteItem } from '../api/itemsData';
import showItems from '../pages/showItems';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrders(user).then((array) => showOrders(array));
    }

    if (e.target.id.includes('order-delete')) {
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrders(firebaseKey).then(() => {
          getOrders(user).then((array) => showOrders(array));
        });
      }
    }

    if (e.target.id.includes('home-create-orders-btn')) {
      addOrderForm();
    }

    if (e.target.id.includes('order-details')) {
      getItems().then(showItems);
    }

    if (e.target.id.includes('item-delete')) {
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getItems().then(showItems);
        });
      }
    }
  });
};

export default domEvents;
