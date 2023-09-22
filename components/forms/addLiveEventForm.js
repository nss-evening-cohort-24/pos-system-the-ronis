import renderToDOM from '../../utils/renderToDom';

const addLiveEventForm = (obj = {}) => {
  const domString = `
  <form id="${obj.firebaseKey ? `update-event--${obj.firebaseKey}` : 'submit-event'}" class="mb-4 event-grid-container">
    <div class="form-group mb-3 gridForm-1">
      <label for="eventName" class="form-label">Event Name: </label>
      <input type="text" class="form-control" id="event-name" aria-describedby="eventName" value="${obj.eventName || ''}" required>
    </div>
    <div class="form-group mb-3 gridForm-2">
      <label for="event-date" class="form-label">Event Date: </label>
      <input type="datetime-local" id="event-date" class="form-control" name="event-date" required>
    </div>
    <div class="form-group mb-3 gridForm-4">
      <label for="even-image" class="form-label">Event Image: </label>
      <input type="url" class="form-control" id="event-image" aria-describedby="eventImage" value="${obj.eventImage || ''}" required>
    </div>
    <div class="form-group mb-3 gridForm-5">
      <label for="event-description" class="form-label">Description: </label>
      <input type="text" class="form-control" id="event-description" aria-describedby="eventDescription" value="${obj.eventDescription || ''}" required>
    </div>
    <button type="submit" id="submit-event-btn" class="btn btn-success mt-3 gridButton">Submit</button>
  <form>`;

  renderToDOM('#event-cards', domString);
};

export default addLiveEventForm;
