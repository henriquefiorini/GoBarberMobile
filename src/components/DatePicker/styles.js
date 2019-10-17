import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const Toggle = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Icon = styled(MDIcon).attrs({
  name: 'event',
  size: 20,
  color: 'rgba(255, 255, 255, 0.8)',
})`
  position: absolute;
  top: 14px;
  left: 16px;
`;

export const Text = styled.Text`
  flex: 1;
  padding-right: 16px;
  padding-left: 48px;
  color: white;
  font-size: 16px;
`;
