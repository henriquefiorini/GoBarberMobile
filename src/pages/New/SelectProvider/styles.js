import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const ProvidersList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 64px;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Provider = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: white;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 24px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;
