import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/home';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  homePage(user);
  logoutButton();
};

export default startApp;
