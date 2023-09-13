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

export default getItems;
