import { getItems, updateItems } from '../api/itemsData';
import { createOrderItem } from '../api/orderItems';
import { createOrder, getOrders, updateOrder } from '../api/ordersData';
import { showOrders } from '../pages/orders';
import orderDetails from '../pages/showItems';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        orderType: document.querySelector('#order-type').value,
        uid: user.uid,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        orderType: document.querySelector('#order-type').value,
        uid: user.uid,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
    if (e.target.id.includes('add-item-form')) {
      const [, itemId, orderId] = e.target.id.split('--');
      const payload = {
        orderId,
        itemId,
      };
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItems(patchPayload).then(() => {
          getItems(user.uid).then(orderDetails);
        });
      });
    }
  });
};

export default formEvents;
