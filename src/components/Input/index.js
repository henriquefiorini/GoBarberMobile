import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Icon, StyledInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Wrapper style={style}>
      {icon && <Icon name={icon} />}
      <StyledInput ref={ref} {...rest} />
    </Wrapper>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

export default forwardRef(Input);
