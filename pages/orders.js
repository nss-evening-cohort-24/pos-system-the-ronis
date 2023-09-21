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
        <div class="orderCard card">
          <div class="card-body cardStyle" style="height: 280px; width: 200px;">
          <div>
              <h5 class="card-title">${item.name}</h5>
                <p class="card-text bold">${item.status ? 'closed' : 'open'}</p>
                <p class="card-text bold">${item.phone}</p>
                <p class="card-text emailSmall bold">${item.email}</p>
                <p class="card-text bold">${item.ordertype}</p>
                <a href="#" id='order-details--${item.firebaseKey}' class="card-link">Details</a>
                  ${item.status ? ''
    : `<a href="#" id='order-edit--${item.firebaseKey}' class="card-link">Edit</a>
                  <a href="#" i id='order-delete--${item.firebaseKey}' class="fa-solid fa-trash-can" /></a>`}
            </div>
          </div>
        </div>
        `;
    });
    renderToDOM('#orders', domString);
  }
};

export { showOrders, emptyOrders };
