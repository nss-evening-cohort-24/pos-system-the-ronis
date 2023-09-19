import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenue = (res) => {
  clearDom();
  const total = res.revenue.reduce((acc, curr) => acc + curr.total, 0);
  const domString = `
  <div id="revenue">
    <h1>REVENUE</h1>
    <br><br>
    <h1>TOTAL REVENUE: $${total}</h1>
    <br><br>
    <h5>TOTAL TIPS: </h5>
    <h5>TOTAL CALL IN ORDERS: </h5>
    <h5>TOTAL WALK IN ORDERS: </h5>
    <br><br>
    <h5>PAYMENT TYPES:</h5>
    <h5>CASH - </h5>
    <h5>CREDIT - </h5>
    <h5>MOBILE - </h5>
  </div>`;

  renderToDOM('#revenue', domString);
};

export default revenue;
