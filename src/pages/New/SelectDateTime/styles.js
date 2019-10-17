import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Picker = styled.View`
  padding-right: 24px;
  padding-left: 24px;
`;

export const Schedule = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  padding-right: 12px;
  padding-left: 12px;
`;

export const Timeslot = styled(RectButton)`
  flex: 1;
  align-items: center;
  margin: 0 12px 24px;
  padding: 24px;
  border-radius: 4px;
  background-color: white;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
`;

export const Text = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 600;
`;
