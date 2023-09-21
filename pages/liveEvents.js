import addEventButton from '../utils/addEventButton';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyEvents = () => {
  addEventButton();
  const domString = '<h1>No Events Planned</h1>';
  renderToDOM('#event-cards', domString);
};

const liveEvents = (array) => {
  clearDom();
  addEventButton();
  let domString = '';

  if (array.length < 1) {
    emptyEvents();
  } else {
    domString += '';
    array.forEach((item) => {
      const date = new Date(item.eventDate);
      const f = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'long',
        timeStyle: 'short',
      });

      domString += `
        <div id="eventCard">
          <div class="event-img">
            <img src="${item.eventImage}">
          </div>
          <div class="event-text">
            <div class="event-name">
              <span class="card-title">${item.eventName}</span>
            </div>
            <div class="description-text">
              <span class="card-text bold">${item.eventDescription}</span>
            </div>
            <div class="date-text">
              <span class="card-text bold">${f.format(date)}</span>
            </div>
          </div>
        </div>`;
    });

    renderToDOM('#event-cards', domString);
  }
};

export {
  liveEvents,
  emptyEvents,
};
