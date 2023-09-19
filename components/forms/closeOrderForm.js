import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrderForm = (orderId, total) => {
  clearDom();
  const domString = `
  <div style="display:grid;"><h1>Payments</h1>
  <form id="close-order-btn--${orderId}--${total}">
    <select class="form-select" id='payment-type' aria-label="Default select example">
    <option selected>Payment Type</option>
    <option value="cash">cash</option>
    <option value="check">check</option>
    <option value="debit">debit</option>
    <option value="credit">credit</option>
    <option value="mobile">mobile</option>
  </select>
  <div class="mb-3">
    <label for="tip" class="form-label"></label>
    <input type="number" class="form-control" id="tip" aria-describedby="tipHelp" value="" placeholder="Tip Amount $">
  </div>
  <div><button type="submit" id="close-order-btn--${orderId}--${total}" class="btn btn-success">Close Order</button>
  </div>
 </form>`;
  renderToDOM('#form-container', domString);
};
export default closeOrderForm;
