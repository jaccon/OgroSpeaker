import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Config from './pages/Config';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Config
  })
);

export default Routes;