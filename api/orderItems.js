import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json?orderBy="orderId"&equalTo="${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createOrderItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrderItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET A SINGLE BOOK ORDER, SO THAT I CAN REMOVE THE BOOK FROM THE ORDER
// REFERENCED IN DOMEVENTS.JS LINE 47
const getSingleItemOrder = async (itemId, orderId) => {
  const allOrderItems = await getOrderItems(orderId);
  const singleOrderItem = await allOrderItems.find((i) => i.itemId === itemId);

  return singleOrderItem;
};

// DELETE BASED ON FIREBASEKEY OF THE ORDER BOOK RELATIONSHIP
const deleteItemOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  deleteItemOrder, getSingleItemOrder, getOrderItems, updateOrderItems, createOrderItem
};
