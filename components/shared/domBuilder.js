import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="button-container"></div>
    <div id="form-container"></div>
    <div id="orders"></div>
    <div id="revenue"></div>
    <div id="live-events">
      <div id="event-button"></div>
      <div id="event-cards"></div>
    </div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
