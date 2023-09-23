import { createEvent, getEvents, updateEvent } from '../api/eventsData';
import { createItems, getItems, updateItems } from '../api/itemsData';
import {
  createOrder, getOrders, getSingleOrder, updateOrder
} from '../api/ordersData';
import { createRevenue, updateRevenue } from '../api/revenueData';
import { liveEvents } from '../pages/liveEvents';
import menuItems from '../pages/addItems';
import { showOrders } from '../pages/orders';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        ordertype: document.querySelector('#order-type').value,
        status: false,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders().then((res) => showOrders(res, user));
        });
      });
    }
    if (e.target.id.includes('submit-item')) {
      const payload = {
        name: document.querySelector('#itemName').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#itemPrice').value,
        description: document.querySelector('#itemDescription').value,
      };
      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItems(patchPayload).then(() => {
          getItems().then(menuItems, user);
        });
      });
    }
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#itemName').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#itemPrice').value,
        description: document.querySelector('#itemDescription').value,
        firebaseKey
      };
      updateItems(payload).then(() => getItems().then(menuItems));
    }

    if (e.target.id.includes('submit-event')) {
      const payload = {
        eventName: document.querySelector('#event-name').value,
        eventDate: document.querySelector('#event-date').value,
        eventDescription: document.querySelector('#event-description').value,
        eventImage: document.querySelector('#event-image').value,
      };

      createEvent(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEvent(patchPayload).then(() => {
          getEvents().then(liveEvents);
        });
      });
    }

    if (e.target.id.includes('close-order-btn')) {
      const [, firebaseKey, subTotal] = e.target.id.split('--');
      const date = (new Date()).toLocaleString('en-US');
      getSingleOrder(firebaseKey).then((res) => {
        const payload = {
          orderId: firebaseKey,
          total: Number(subTotal) + Number(document.querySelector('#tip').value),
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
              getOrders().then((response) => showOrders(response, user));
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
      updateOrder(payload).then(() => getOrders().then((response) => showOrders(response, user)));
    }

    if (e.target.id.includes('update-event')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        eventName: document.querySelector('#event-name').value,
        eventDate: document.querySelector('#event-date').value,
        eventDescription: document.querySelector('#event-description').value,
        eventImage: document.querySelector('#event-image').value,
        firebaseKey,
      };
      updateEvent(payload).then(() => getEvents().then(liveEvents));
    }
  });
};
export default formEvents;
