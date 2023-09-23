import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders Found</h1>';
  renderToDOM('#orders', domString);
};

const showOrders = (array) => {
  clearDom();
  if (array.length < 1) {
    emptyOrders();
  } else {
    let domString = '';
    array.forEach((item) => {
      domString += `
        <div class="card-body card-style" style="height: 350px; width: 350px;">
          <div class="order-title">
            <h5 class="order-name">${item.name}</h5>
          </div>
          <div class="order-info">
            <p class="card-text order-status bold">${item.status ? 'closed' : 'open'}</p>
            <p class="card-text bold">Phone: ${item.phone}</p>
            <p class="card-text emailSmall bold">Email: ${item.email}</p>
            <p class="card-text bold">Type: ${item.ordertype}</p>
          </div>
          <div class="order-buttons">
            <a href="#" id='order-details--${item.firebaseKey}' class="card-link">Details</a>
            ${item.status ? '' : `<a href="#" id='order-edit--${item.firebaseKey}' class="card-link">Edit</a>
            <a href="#" i id='order-delete--${item.firebaseKey}' class="fa-solid fa-trash-can" /></a>`}
          </div>
        </div>`;
    });
    renderToDOM('#orders', domString);
  }
};

export { showOrders, emptyOrders };
