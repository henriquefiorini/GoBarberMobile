import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Form({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Form.defaultProps = {
  children: null,
};

export default Form;
