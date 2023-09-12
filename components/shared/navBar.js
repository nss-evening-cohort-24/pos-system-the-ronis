import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">HHP+W</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="view-orders">
            View Orders <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="create-order">Create an Order</a>
        </li>
      </ul>
      <div class="me-sm-2" id="search">
        <input class="form-control mr-sm-2" id="search" placeholder="Search Orders" aria-label="Search">
      </div>
      <span class="navbar-text">
        <div id="logout-button"></div>
      </span>
    </div>
  </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
