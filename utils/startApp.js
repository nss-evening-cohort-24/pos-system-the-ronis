import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';

const startApp = (user) => {
  domBuilder(user);
  logoutButton();
};

export default startApp;
