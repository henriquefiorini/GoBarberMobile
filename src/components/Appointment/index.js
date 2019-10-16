import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
  ActionButton,
} from './styles';

function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatar/48/gobarber.png',
          }}
        />
        <Info>
          <Name>Name</Name>
          <Time>3 hours ago</Time>
        </Info>
      </Left>
      <ActionButton onPress={() => {}}>
        <Icon name="event-busy" size={24} color="#f64c75" />
      </ActionButton>
    </Container>
  );
}

export default Appointment;
