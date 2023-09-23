const clearDom = () => {
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#orders').innerHTML = '';
  document.querySelector('#event-button').innerHTML = '';
  document.querySelector('#event-cards').innerHTML = '';
};

export default clearDom;
