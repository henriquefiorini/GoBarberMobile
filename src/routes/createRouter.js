import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { SignIn, SignUp, Dashboard, Profile } from '~/pages';

export default (isAuthenticated = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              activeTintColor: 'white',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              showLabel: false,
              style: {
                height: 56,
                borderTopWidth: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
              },
              keyboardHidesTabBar: true,
            },
          },
        ),
      },
      {
        initialRouteName: isAuthenticated ? 'App' : 'Auth',
      },
    ),
  );
