import { getOrders, searchOrders } from '../api/ordersData';
import addOrderForm from '../components/forms/addOrderForm';
import { emptyOrders, showOrders } from '../pages/orders';

const navigationEvents = (user) => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(user.uid).then((array) => {
      if (array.length) {
        showOrders(array);
      } else {
        emptyOrders();
      }
    });
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });

  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#searchBar').value.toLowerCase();

    if (e.keyCode === 13) {
      searchOrders(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showOrders(search);
          } else {
            emptyOrders();
          }
        });
    }
  });
  document.querySelector('#search').value = '';
};

export default navigationEvents;
