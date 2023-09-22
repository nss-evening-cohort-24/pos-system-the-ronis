import addEventButton from '../utils/addEventButton';
import renderToDOM from '../utils/renderToDom';

const emptyEvents = () => {
  addEventButton();
  const domString = '<h1 style="text-align: center;">No Events Planned</h1>';
  renderToDOM('#event-cards', domString);
};

const liveEvents = (array) => {
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
            <div id="bottom-row">
              <div class="date-text">
                <span class="card-text bold">${f.format(date)}</span>
              </div>
              <div id="buttons">
                <a href="#" id='event-edit--${item.firebaseKey}' class="card-link event-edit">Edit</a>
                <a href="#" id='event-delete--${item.firebaseKey}' class="fa-solid fa-trash-can event-delete" /></a>
              </div>
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
