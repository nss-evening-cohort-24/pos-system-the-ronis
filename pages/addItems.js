import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const menuItems = (array, orderId) => {
  clearDom();
  let domString = '';
  domString += '<a href="#" id="create-item-admin-btn" i class="fa-regular fa-square-plus" style="color: #e2c928;"></a>';
  if (!array.length) {
    domString += '<h1>All Available Items Are Added To Order</h1>';
  } else {
    domString += '<h3>Menu Items</h3><div class="cards">';
    array.forEach((item) => {
      domString += `
        <div class="itemCard" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <img src=${item.image} class="card-img-top" alt="${item.name}" style="height: 100px;">
            <h6 class="card-subtitle mb-2 text-body-secondary colorPrice">$${item.price}</h6>
            <p class="card-text">${item.description}</p>
          <div>
          <button id="add-item-order-btn--${item.firebaseKey}--${orderId}" type="button" class="btn btn-success">ADD ITEM TO CART</button>
          </div>
          ${item.status ? '' : `
          <a href="#" id="item-edit-admin--${item.firebaseKey}" class="card-link">Edit</a>
          <a i id='item-erase-admin--${item.firebaseKey}--${orderId}' class="fa-solid fa-trash-can" /></a>`}

        </div>
      </div>`;
    });
    domString += '</div>';
  }
  renderToDOM('#menu', domString);
};

export default menuItems;
