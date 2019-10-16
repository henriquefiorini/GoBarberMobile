import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function Page({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Page.defaultProps = {
  title: null,
  children: null,
};

export default Page;
