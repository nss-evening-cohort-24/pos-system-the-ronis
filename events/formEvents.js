import {
  createOrder, getOrders, getSingleOrder, updateOrder
} from '../api/ordersData';
import { createRevenue, updateRevenue } from '../api/revenueData';
import { showOrders } from '../pages/orders';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        ordertype: document.querySelector('#order-type').value,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    if (e.target.id.includes('close-order-btn')) {
      const [, firebaseKey, total] = e.target.id.split('--');
      const date = (new Date()).toLocaleString('en-US');
      getSingleOrder(firebaseKey).then((res) => {
        const payload = {
          orderId: firebaseKey,
          total,
          date: date.toString(),
          paymenttype: document.querySelector('#payment-type').value,
          tip: document.querySelector('#tip').value,
          ordertype: res.ordertype
        };
        const payloadClosed = { firebaseKey, status: true };
        updateOrder(payloadClosed).then(() => {
          createRevenue(payload).then(({ name }) => {
            const patchPayload = { firebaseKey: name };

            updateRevenue(patchPayload).then(() => {
              getOrders().then(showOrders);
            });
          });
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        ordertype: document.querySelector('#order-type').value,
        firebaseKey,
      };
      updateOrder(payload).then(() => getOrders().then(showOrders));
    }
  });
};
export default formEvents;
