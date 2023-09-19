import renderToDOM from '../utils/renderToDom';

const homePage = (user) => {
  let domString = '';

  domString += `<h1> Welcome, ${user.displayName}!</h1>
  <div class="button-row">
    <button type="button" id ='home-view-orders-btn' class="btn btn-success">View Orders</button>
    <button type="button" id ='home-create-orders-btn' class="btn btn-info">Create An Order</button>
    <button type="button" id ='home-view-revenue-btn' class="btn btn-warning">View Revenue</button>
  </div>
  `;
  renderToDOM('#button-container', domString);
};

export default homePage;
