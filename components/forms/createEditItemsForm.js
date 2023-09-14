import { getItemsNotInTheOrder } from '../../api/mergedData';
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
const addItemsToOrder = async (uid, orderId) => {
  let domString = '';
  const array = await getItemsNotInTheOrder(uid, orderId);

  if (!array.length) {
    domString += '<p style="color:white">All Available Items Are Added To Order</p>';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card">
      <div class="card-body" style="height: 80px">
        <h5 class="card-title">${item.name}</h5>
          <p class="card-text bold">${item.price ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
          <hr>
      </div>
    </div>
        <i id="add-item-order-btn--${item.firebaseKey}--${orderId}" class="btn btn-danger">Add Item To Order</i>`;
    });
  }

  renderToDOM('#form-container', domString);
};
// const addItemForm = (obj = {}) => {
//   clearDom();
//   const domString = `
//     <form id="${obj.firebaseKey ? `add-item-form--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
//       <div class="form-group">
//         <label for="image">Customer Name</label>
//         <input type="text" class="form-control" id="itemName" placeholder="Customer Name" value="${obj.name || ''}" required>
//       </div>
//       <div class="form-group">
//         <label for="price">Customer Name</label>
//         <input type="text" class="form-control" id="itemPrice" placeholder="Customer Name" value="${obj.price || ''}" required>
//       </div>
//     <div>
//     <label for="orderType">Select an Order Type</label>
//     <select class="form-control" id="order_type" required>
//     <option value="">Select an Order Type</option>
//     <option value="In-Person">In-Person</option>
//     <option value="Online">Online</option>
//     </select>
//     </div>
//       <button type="submit" id="add-item-form--${obj.firebaseKey}--${orderId}" class="btn btn-primary mt-3">Submit Order</button>
//     </form>`;

//   renderToDOM('#form-container', domString);
// };
export default addItemsToOrder;
