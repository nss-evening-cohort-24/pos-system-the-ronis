import renderToDOM from './renderToDom';

const addEventButton = () => {
  const domString = '<button type="button" id="add-event-btn" class="btn btn-success">Add Event</button>';
  renderToDOM('#event-button', domString);
};

export default addEventButton;
