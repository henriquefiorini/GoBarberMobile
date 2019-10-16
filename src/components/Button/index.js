import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Wrapper, Text } from './styles';

function Button({ isLoading, children, ...rest }) {
  return (
    <Wrapper {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text>{children}</Text>
      )}
    </Wrapper>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
