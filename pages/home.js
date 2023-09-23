import renderToDOM from '../utils/renderToDom';

const homePage = (user) => {
  let domString = '';

  domString += `
  <div id="home-container">
    <h1 id="welcome-message"> Welcome, ${user.displayName}!</h1>
    <div class="home-view">
      <button type="button" id ='home-view-orders-btn' class="btn btn-success">View Orders</button>
      <button type="button" id ='home-create-orders-btn' class="btn btn-info">Create An Order</button>
      <button type="button" id ='home-view-revenue-btn' class="btn btn-warning">View Revenue</button>
    </div>
  </div>`;

  renderToDOM('#home', domString);
};

export default homePage;
