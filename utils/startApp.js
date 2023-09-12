import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  logoutButton();
};

export default startApp;
