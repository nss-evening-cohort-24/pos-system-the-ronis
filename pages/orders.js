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
        <div class="card-style">
          <div class="order-title">
            <h5 class="order-name">${item.name}</h5>
            <p id="${item.status === false ? 'order-open' : 'order-closed'}" class="card-text order-status bold">${item.status ? 'closed' : 'open'}</p>
          </div>
          <div class="order-info">
            <p class="card-text bold">${item.phone}</p>
            <p class="card-text emailSmall bold">${item.email}</p>
            <p class="card-text bold">${item.ordertype}</p>
          </div>
          <div id="order-buttons">
            <div id="details-button">
              <a href="#" id='order-details--${item.firebaseKey}' class="order-details">Details</a>
            </div>
            <div id="edit-delete">
              ${item.status ? '' : `<a href="#" id='order-edit--${item.firebaseKey}' class="order-edit">Edit</a>
              <a href="#" i id='order-delete--${item.firebaseKey}' class="order-delete fa-solid fa-trash-can" /></a>`}    
            </div>
          </div>
        </div>`;
    });
    renderToDOM('#orders', domString);
  }
};

export { showOrders, emptyOrders };
