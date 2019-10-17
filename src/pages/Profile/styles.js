import styled from 'styled-components/native';

import { Button } from '~/components';

export const Divider = styled.View`
  height: 1px;
  margin-top: 16px;
  margin-bottom: 32px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const SignOutButton = styled(Button)`
  margin-top: 24px;
  background-color: #f64c75;
`;
