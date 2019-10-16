import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  background-color: #3b9eff;
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
