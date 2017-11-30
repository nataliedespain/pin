import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './components/login/Login';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import User from './components/users/User';

const App = TabNavigator({
  Feed: {
    screen: Feed,
  },
  Profile: {
    screen: Profile
  },
});

const Navigator = StackNavigator({
  Login: { screen: Login },
  App: {
    screen: App
  },
  User: {
    screen: User
  }
});



export default Navigator;
