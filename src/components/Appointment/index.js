import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
  ActionButton,
} from './styles';

function Appointment({ data, onCancel }) {
  const parsedDate = useMemo(
    () =>
      formatRelative(parseISO(data.date), new Date(), {
        locale: enUS,
        addSuffix: true,
      }),
    [data.date],
  );

  return (
    <Container isPast={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatar/96/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{parsedDate}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <ActionButton onPress={onCancel}>
          <Icon name="event-busy" size={24} color="#f64c75" />
        </ActionButton>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    past: PropTypes.bool,
    cancelable: PropTypes.bool,
    canceled_at: PropTypes.string,
    provider: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
  onCancel: PropTypes.func,
};

Appointment.defaultProps = {
  onCancel: () => {},
};

export default Appointment;
