const clearDom = () => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#orders').innerHTML = '';
  document.querySelector('#event-button').innerHTML = '';
  document.querySelector('#event-cards').innerHTML = '';
  document.querySelector('#menu').innerHTML = '';
  document.querySelector('#details').innerHTML = '';
  document.querySelector('#revenue').innerHTML = '';
};

export default clearDom;
