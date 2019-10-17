import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Api } from '~/services';
import { Page, DatePicker } from '~/components';

import { Picker, Schedule, Timeslot, Text } from './styles';

function SelectDateTime({ navigation }) {
  const provider = navigation.getParam('provider');

  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await Api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setSchedule(response.data);
    }

    loadSchedule();
  }, [date, provider.id]);

  function handleSelect(value) {
    navigation.navigate('ReviewAppointment', {
      provider,
      date: value,
    });
  }

  return (
    <Page>
      <Picker>
        <DatePicker date={date} onChange={setDate} />
      </Picker>
      <Schedule
        data={schedule}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Timeslot
            enabled={item.available}
            onPress={() => handleSelect(item.value)}
          >
            <Text>{item.time}</Text>
          </Timeslot>
        )}
      />
    </Page>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Pick a date',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={32} color="white" />
    </TouchableOpacity>
  ),
});

SelectDateTime.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default SelectDateTime;
