import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const orderDetails = (array) => {
  clearDom();
  let domString = '';
  if (array.length < 0) {
    domString = '<h1> No Items </h1>';
  } else {
    domString = '<div style="display:grid;"><h1>TOTAL: 0</h1>';
    array.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
        <a href="#" class="card-link" id="item-edit--${item.firebaesKey}">Edit Item</a>
        <a href="#" class="card-link" id="item-delete--${item.firebaesKey}">Delete Item</a>
      </div>
    </div>`;
    });
    domString += '</div>';
  }
  renderToDOM('#orders', domString);
};

export default orderDetails;
