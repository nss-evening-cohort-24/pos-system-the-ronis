import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenue = (res) => {
  clearDom();
  let total = 0;
  let tipTotal = 0;
  let callInOrders = 0;
  let walkInOrders = 0;
  let cash = 0;
  let credit = 0;
  let mobile = 0;

  total += res.reduce((acc, curr) => Number(acc) + Number(curr.total), total);
  tipTotal += res.reduce((acc, curr) => Number(acc) + Number(curr.tip), tipTotal);

  res.forEach((type) => {
    if (type.ordertype === 'walk-in') {
      walkInOrders += 1;
    } else if (type.ordertype === 'call-in') {
      callInOrders += 1;
    }
  });

  res.forEach((type) => {
    if (type.paymenttype === 'cash') {
      cash += 1;
    } else if (type.paymenttype === 'credit') {
      credit += 1;
    } else if (type.paymenttype === 'mobile') {
      mobile += 1;
    }
  });

  const domString = `
  <div id="revenue">
    <h1>REVENUE</h1>
    <br><br>
    <h1>TOTAL REVENUE: $${total}</h1>
    <br><br>
    <h5>TOTAL TIPS: $${tipTotal}</h5>
    <h5>TOTAL CALL IN ORDERS: ${callInOrders}</h5>
    <h5>TOTAL WALK IN ORDERS: ${walkInOrders}</h5>
    <br><br>
    <h5>PAYMENT TYPES:</h5>
    <h5>CASH - ${cash}</h5>
    <h5>CREDIT - ${credit}</h5>
    <h5>MOBILE - ${mobile}</h5>
  </div>`;

  renderToDOM('#revenue', domString);
};

export default revenue;
