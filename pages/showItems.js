import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const orderDetails = (res) => {
  clearDom();
  let domString = '';
  if (res.orderItems.length < 1) {
    domString = '<h1> No Items </h1>';
  } else {
    domString = '<div style="display:grid;"><h1>TOTAL: 0</h1>';
    res.orderItems.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
        <a href="#" class="card-link" id="item-edit--${item.firebaseKey}">Edit Item</a>
        <a href="#" class="card-link" id="item-delete--${item.firebaseKey}">Delete Item</a>
      </div>
    </div>`;
    });
    domString += `<div><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success">ADD ITEM</button><button type="button" class="btn btn-primary">GO TO PAYMENT</button></div></div>`;
  }
  renderToDOM('#orders', domString);
};

export default orderDetails;
