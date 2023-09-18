import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
    <div class="form-group mb-3">
      <label for="orderName" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="order-name" aria-describedby="orderName" placeholder="Order Name" value="${obj.name || ''}" required>
    </div>
    <div class="form-group mb-3">
      <label for="customerPhone" class="form-label">Customer Phone</label>
      <input type="tel" class="form-control" id="customer-phone" aria-describedby="customerPhone" placeholder="Customer Phone" value="${obj.phone || ''}"  required>
    </div>
    <div class="form-group mb-3">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="text" class="form-control" id="customer-email" aria-describedby="customerEmail" placeholder="Customer Email" value="${obj.email || ''}"  required>
    </div>
    <div class="form-group mb-3">
      <label for="orderType" class="form-label">Order Type</label>
      <select class="form-select" aria-label="orderType" id="order-type">
        <option value="${obj.ordertype || ''}" selected disabled>${obj.ordertype || 'Select an Order Type'}</option>
        <option value="walk-in">Walk-In</option>
        <option value="call-in">Call-In</option>
      </select>
    <div>
    <br>
    <button type="submit" class="btn btn-success" id="submit">Create/Edit Order</button>
  </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
