import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="button-container"></div>
    <div id="form-container"></div>
    <div id="orders"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
