import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrderForm = (orderId) => {
  clearDom();
  const domString = `
  '<div style="display:grid;"><h1>Payments</h1>'
  <form>
    <select class="form-select" aria-label="Default select example">
    <option selected>Payment Type</option>
    <option value="cash">cash</option>
    <option value="check">check</option>
    <option value="debit">debit</option>
    <option value="credit">credit</option>
    <option value="mobile">mobile</option>
  </select>
  <div class="mb-3">
    <label for="tip" class="form-label">Tip Amount</label>
    <input type="number" class="form-control" id="tip" aria-describedby="tipHelp">
  </div>
  <button type="submit" id='close-order-form-btn--${orderId}class="btn btn-primary">Close Order</button>
 </form>`;
  renderToDOM('#orders', domString);
};
export default closeOrderForm;
