import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Page } from '~/components';

function Profile() {
  return <Page title="Profile" />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};

export default Profile;
