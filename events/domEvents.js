import addOrderForm from '../components/forms/addOrderForm';
/* eslint-disable no-alert */
import { getOrders, deleteOrders, getSingleOrder } from '../api/ordersData';
import { showOrders } from '../pages/orders';
import { getItems } from '../api/itemsData';
import addItemsToOrder from '../components/forms/addItems';
import {
  createOrderItem, deleteItemOrder, getSingleItemOrder, updateOrderItems
} from '../api/orderItems';
import orderDetails from '../pages/showItems';
import { getOrderDetails } from '../api/mergedData';
import closeOrderForm from '../components/forms/closeOrderForm';

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
    if (e.target.id.includes('add-item-btn')) {
      const [, orderId] = e.target.id.split('--');
      getItems().then((array) => {
        addItemsToOrder(array, orderId);
      });
    }

    if (e.target.id.includes('order-details')) {
      // orderID is being deconstructed
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((details) => {
        orderDetails(details);
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

    if (e.target.id.includes('order-edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orders) => addOrderForm(orders));
    }

    if (e.target.id.includes('payment-type-btn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrderForm(orderId, total);
    }

    if (e.target.id.includes('item-delete')) {
      const [, itemId, orderId] = e.target.id.split('--');

      getSingleItemOrder(itemId, orderId).then((orderItem) => deleteItemOrder(orderItem.firebaseKey)).then(() => {
        getOrderDetails(orderId).then((res) => orderDetails(res));
      });
    }
  });
};

export default domEvents;
