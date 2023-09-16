import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
// const addItemForm = (itemsObj = {}) => {
//   clearDom();
//   let domString = '';
//   domString += `
//   <form id="add-item-form--${itemsObj.firebaseKey}">
//   <h5 class="itemNameTitle">Item Name</h5>
//   <select class="form-select form-select-lg mb-3" aria-label="Large select example">
//     <option selected  id="itemName" class="form-label">${itemsObj.name || ''}</option>
//     <option  value="cheese pizza">Cheese Pizza</option>
//     <option  value="pineapple pizza">Pineapple Pizza</option>
//     <option value="supreme pizza">Supreme Pizza</option>
//     <option value="cold pizza">Cold Pizza</option>
//   </select>
//   <select class="form-select form-select-lg mb-3" aria-label="Large select example">
//     <option selected id="name">Wings</option>
//     <option value="honey bbq boneless">Honey BBQ Boneless</option>
//     <option value="caribbean jerk traditional">Caribbean Jerk Traditional</option>
//     <option value="hot boneless">Hot Boneless</option>
//     <option value="the meat sweats">The Meat Sweats</option>
//   </select>
//   <div class="mb-3">
//     <label for="itemPrice" class="form-label">Item Price</label>
//     <input type="number" value="${itemsObj.price}" class="form-control" id="itemPrice" aria-describedby="itemPriceHelp">
//   </div>
//   <button type="submit" class="btn btn-primary">Add Item</button>
//  </form>`;
//   renderToDOM('#form-container', domString);
// };
const addItemsToOrder = (array, orderId) => {
  clearDom();
  let domString = '';
  // const array = await getItemsNotInTheOrder(uid, orderId);

  if (!array.length) {
    domString += '<h1 style="display:grid; color:white;">All Available Items Are Added To Order</h1>';
  } else {
    domString += '<h3 style="display:grid;" style="color:white;">Menu Items</h3></hr>';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
        <div>
        <button id="add-item-order-btn--${item.firebaseKey}--${orderId}" type="button" class="btn btn-success">ADD ITEM TO CART</button>
        </div>
      </div>`;
    });
  }
  renderToDOM('#orders', domString);
};

export default addItemsToOrder;
