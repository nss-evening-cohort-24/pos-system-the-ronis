import client from '../utils/client';

const endpoint = client.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'GET',
    headers: {
      'get-content': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getItems,
  deleteItem,
};
