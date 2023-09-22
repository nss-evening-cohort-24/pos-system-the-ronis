import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const updateItemForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
    <div class="form-group mb-3">
      <label for="itemName" class="form-label">Item Name</label>
      <input type="text" class="form-control" id="itemName" aria-describedby="orderName" placeholder="Item Name" value="${obj.name || ''}" required>
    </div>
    <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
    <div class="form-group mb-3">
      <label for="itemPrice" class="form-label">Price</label>
      <input type="text" class="form-control" id="itemPrice" aria-describedby="customerPhone" placeholder="Price $" value="${obj.price || ''}"  required>
    </div>
    <div class="form-group mb-3">
    <label for="itemDescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="itemDescription" aria-describedby="customerPhone" placeholder="Description" value="${obj.description || ''}"  required>
  </div>
    <br>
    <button type="submit" class="btn btn-success" id="submit">Create/Edit Order</button>
  </form>`;
  console.warn(domString);
  renderToDom('#form-container', domString);
};

export default updateItemForm;
