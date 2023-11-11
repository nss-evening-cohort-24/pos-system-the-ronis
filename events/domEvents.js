import addOrderForm from '../components/forms/addOrderForm';
/* eslint-disable no-alert */
import { getOrders, getSingleOrder } from '../api/ordersData';
import { showOrders } from '../pages/orders';
import { deleteItem, getItems, getSingleItem } from '../api/itemsData';
import {
  createOrderItem, deleteItemOrder, getSingleItemOrder, updateOrderItems
} from '../api/orderItems';
import orderDetails from '../pages/showItems';
import { deleteItemOrderRelationship, getOrderDetails } from '../api/mergedData';
import closeOrderForm from '../components/forms/closeOrderForm';
import { getRevenue } from '../api/revenueData';
import revenue from '../pages/revenue';
import updateItemForm from '../components/forms/updateItemForm';
import menuItems from '../pages/addItems';
import addLiveEventForm from '../components/forms/addLiveEventForm';
import { deleteEvent, getEvents, getSingleEvent } from '../api/eventsData';
import { liveEvents } from '../pages/liveEvents';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrders(user).then((array) => showOrders(array, user));
    }

    if (e.target.id.includes('order-delete')) {
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItemOrderRelationship(firebaseKey).then(() => {
          getOrders(user).then((array) => showOrders(array, user));
        });
      }
    }

    if (e.target.id.includes('home-create-orders-btn')) {
      addOrderForm();
    }
    if (e.target.id.includes('add-item-btn')) {
      const [, orderId] = e.target.id.split('--');
      getItems().then((array) => {
        menuItems(array, orderId, user);
      });
    }

    if (e.target.id.includes('order-details')) {
      // orderID is being deconstructed
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((details) => {
        orderDetails(details, user);
      });
    }

    if (e.target.id.includes('add-item-order-btn')) {
      const [, itemId, orderId] = e.target.id.split('--');
      // deconstructing and adding them to a new payload for our orderItems node
      const payload = {
        orderId,
        itemId,
        uid: user.uid
      };
      // orderItems node created (a new item was added)
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrderItems(patchPayload).then(() => {
          getOrderDetails(orderId).then((res) => orderDetails(res));
        });
      });
    }

    if (e.target.id.includes('home-view-revenue-btn')) {
      getRevenue().then(revenue);
    }
    if (e.target.id.includes('order-edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orders) => addOrderForm(orders));
    }

    if (e.target.id.includes('payment-type-btn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrderForm(orderId, total);
    }

    if (e.target.id.includes('add-event-btn')) {
      addLiveEventForm();
    }

    if (e.target.id.includes('event-edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEvent(firebaseKey).then((event) => addLiveEventForm(event));
    }
    if (e.target.id.includes('create-item-admin-btn')) {
      updateItemForm();
    }
    if (e.target.id.includes('item-edit-admin')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => updateItemForm(itemObj));
    }
    if (e.target.id.includes('item-erase-admin')) {
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getItems().then((array) => menuItems(array));
        });
      }
    }
    if (e.target.id.includes('item-delete')) {
      const [, itemId, orderId] = e.target.id.split('--');
      getSingleItemOrder(itemId, orderId).then((orderItem) => deleteItemOrder(orderItem.firebaseKey)).then(() => {
        getOrderDetails(orderId).then((res) => orderDetails(res));
      });
    }

    if (e.target.id.includes('event-delete')) {
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEvent(firebaseKey).then(() => {
          getEvents(user).then((array) => liveEvents(array, user));
        });
      }
    }
  });
};

export default domEvents;
