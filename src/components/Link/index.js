import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Text } from './styles';

function Link({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Text>{children}</Text>
    </Wrapper>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Link;
