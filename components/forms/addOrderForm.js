import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
    <div class="form-group mb-3">
      <label for="orderName" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="order-name" placeholder="">
    </div>
    <div class="form-group mb-3">
      <label for="customerPhone" class="form-label">Customer Phone</label>
      <input type="text" class="form-control" id="customer-phone" placeholder="">
    </div>
    <div class="form-group mb-3">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="text" class="form-control" id="customer-email" placeholder="">
    </div>
    <button type="submit" class="btn btn-success" id="submit">Create/Edit Order</button>
  </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
