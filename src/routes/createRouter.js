import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import {
  SignIn,
  SignUp,
  Dashboard,
  SelectProvider,
  SelectDateTime,
  ReviewAppointment,
  Profile,
} from '~/pages';

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
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  ReviewAppointment,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: 'white',
                    headerLeftContainerStyle: {
                      marginLeft: 16,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Schedule',
                tabBarVisible: false,
                tabBarIcon: () => (
                  <Icon
                    name="add-circle-outline"
                    size={24}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeTintColor: 'white',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              labelStyle: {
                fontSize: 12,
                fontWeight: '600',
              },
              style: {
                height: 56,
                borderTopWidth: 0,
                backgroundColor: '#644cb4',
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
