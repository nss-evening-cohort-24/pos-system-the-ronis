import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { admin } from '../utils/client';

const emptyOrders = () => {
  const domString = '<h1>No Orders Found</h1>';
  renderToDOM('#orders', domString);
};

const showOrders = (array, user) => {
  let domString = '';
  clearDom();
  admin.forEach((adminuser) => {
    if (adminuser === user.uid) {
      // render all cards wth all buttons
      if (array.length < 1) {
        emptyOrders();
      } else {
        domString = '';
        array.forEach((item) => {
          domString += `
                <div class="orderCard card">
                  <div class="card-body cardStyle" style="height: 280px; width: 200px;">
                  <div>
                      <h5 class="card-title">${item.name}</h5>
                        <p class="card-text bold">${item.status ? 'closed' : 'open'}</p>
                        <p class="card-text bold">${item.phone}</p>
                        <p class="card-text emailSmall bold">${item.email}</p>
                        <p class="card-text bold">${item.ordertype}</p>
          <a href="#" id='order-details--${item.firebaseKey}' class="card-link">Details</a>`;
          domString += `${item.status ? ''
            : `<a href="#" id='order-edit--${item.firebaseKey}' class="card-link">Edit</a>
          <a href="#" i id='order-delete--${item.firebaseKey}' class="fa-solid fa-trash-can" /></a>`}`;
          domString += `</div>
          </div>
          </div>`;
        });
      }
    } else {
      const nonAdminOrders = array.filter((orders) => orders.user === user.uid);
      if (nonAdminOrders.length < 1) {
        emptyOrders();
      } else {
        domString = '';
        nonAdminOrders.forEach((item) => {
          domString += `
                <div class="orderCard card">
                  <div class="card-body cardStyle" style="height: 280px; width: 200px;">
                  <div>
                      <h5 class="card-title">${item.name}</h5>
                        <p class="card-text bold">${item.status ? 'closed' : 'open'}</p>
                        <p class="card-text bold">${item.phone}</p>
                        <p class="card-text emailSmall bold">${item.email}</p>
                        <p class="card-text bold">${item.ordertype}</p>
          <a href="#" id='order-details--${item.firebaseKey}' class="card-link">Details</a>`;
          domString += `${item.status ? ''
            : `<a href="#" id='order-edit--${item.firebaseKey}' class="card-link">Edit</a>
          <a href="#" i id='order-delete--${item.firebaseKey}' class="fa-solid fa-trash-can" /></a>`}`;
          domString += `</div>
          </div>
          </div>`;
        });
      }
    }
  });
  renderToDOM('#orders', domString);
};

export { showOrders, emptyOrders };
