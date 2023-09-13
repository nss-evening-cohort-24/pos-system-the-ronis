import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import homePage from '../pages/home';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  homePage(user);
  logoutButton();
  domEvents(user);
};

export default startApp;
