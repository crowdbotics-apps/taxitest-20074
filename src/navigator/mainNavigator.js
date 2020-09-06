import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings98243Navigator from '../features/Settings98243/navigator';
import Settings98228Navigator from '../features/Settings98228/navigator';
import NotificationList98227Navigator from '../features/NotificationList98227/navigator';
import Maps98226Navigator from '../features/Maps98226/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings98243: { screen: Settings98243Navigator },
Settings98228: { screen: Settings98228Navigator },
NotificationList98227: { screen: NotificationList98227Navigator },
Maps98226: { screen: Maps98226Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
