import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import homePage from '../pages/home';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  homePage(user);
  logoutButton();
  navigationEvents(user);
  formEvents(user);
  domEvents(user);
};

export default startApp;
