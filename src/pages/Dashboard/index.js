import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Api } from '~/services';
import { Page, Appointment } from '~/components';

import { List } from './styles';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await Api.get('appointments');
      setAppointments(response.data);
    }

    if (isFocused) loadAppointments();

    return () => {};
  }, [isFocused]);

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
    <Icon name="home" size={24} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
