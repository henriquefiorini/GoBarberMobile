import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Api } from '~/services';
import { Page, Appointment } from '~/components';

import { List } from './styles';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await Api.get('appointments');
      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleCancellation(id) {
    const response = await Api.delete(`appointments/${id}`);
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment,
      ),
    );
  }

  return (
    <Page title="Appointments">
      <List
        data={appointments}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onCancel={() => handleCancellation(item.id)}
          />
        )}
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
