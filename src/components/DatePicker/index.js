import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Wrapper, Toggle, Icon, Text } from './styles';

function DatePicker({ date, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = useMemo(
    () => format(date, 'MMMM dd, yyyy', { locale: enUS }),
    [date],
  );

  function handleChange(_, value) {
    setIsOpen(!isOpen);
    onChange(value || date);
  }

  return (
    <Wrapper>
      <Toggle onPress={() => setIsOpen(!isOpen)}>
        <Icon />
        <Text>{formattedDate}</Text>
      </Toggle>
      {isOpen && (
        <DateTimePicker
          mode="date"
          value={date}
          onChange={handleChange}
          minimumDate={new Date()}
          minuteInterval={60}
        />
      )}
    </Wrapper>
  );
}

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
