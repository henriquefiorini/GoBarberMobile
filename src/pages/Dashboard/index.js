import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Page, Appointment } from '~/components';

import { List } from './styles';

const data = [1, 2, 3, 4];

function Dashboard() {
  return (
    <Page title="Appointments">
      <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Appointment data={item} />}
      />
    </Page>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={24} color={tintColor} />
  ),
};

export default Dashboard;
