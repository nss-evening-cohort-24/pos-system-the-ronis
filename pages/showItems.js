import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const orderDetails = (res) => {
  clearDom();
  let domString = '';
  if (res.orderItems.length < 1) {
    domString = `
    <div>
      <h1> No Items </h1>
    </div>
    <div>
      <button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success">ADD ITEM</button>    
    <div>`;
  } else {
    const total = res.orderItems.reduce((acc, curr) => Number(acc) + Number(curr.price), 0);
    domString = `
    <div id="total-text">
      <h1>TOTAL: $${total} </h1>
      ${res.status ? '' : `<div id="add-payment"><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success" style="margin: 10px 5px;">ADD ITEM</button><button type="button" id="payment-type-btn--${res.firebaseKey}--${total}" class="btn btn-primary">GO TO PAYMENT</button></div></div>`}
    </div>
    `;
    res.orderItems.forEach((item) => {
      domString += `
        <div id="order-items-card">
          <div id="order-items-text">
            <h5 class="card-title">${item.name}</h5>
          </div>
          <div id="bottom-details">
            <h6 class="card-subtitle text-body-secondary">$${item.price}</h6>
            ${res.status ? '' : `<a href="#" i id='item-delete--${item.firebaseKey}--${res.firebaseKey}' class="fa-solid  fa-trash-can" /></a>`}
          </div>
        </div>`;
    });
  }

  renderToDOM('#details', domString);
};

export default orderDetails;
