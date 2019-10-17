import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Api } from '~/services';
import { Page, Button } from '~/components';

import { Appointment, Avatar, Name, Time } from './styles';

function ReviewAppointment({ navigation }) {
  const provider = navigation.getParam('provider');
  const date = navigation.getParam('date');

  const formattedDate = useMemo(
    () =>
      formatRelative(parseISO(date), new Date(), {
        locale: enUS,
        addSuffix: true,
      }),
    [date],
  );

  async function handleConfirmation() {
    await Api.post('appointments', {
      provider_id: provider.id,
      date,
    });
    navigation.navigate('Dashboard');
  }

  return (
    <Page>
      <Appointment>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/96/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{formattedDate}</Time>
        <Button onPress={handleConfirmation}>Confirm Appointment</Button>
      </Appointment>
    </Page>
  );
}

ReviewAppointment.navigationOptions = ({ navigation }) => ({
  title: 'Review appointment',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={32} color="white" />
    </TouchableOpacity>
  ),
});

ReviewAppointment.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default ReviewAppointment;
