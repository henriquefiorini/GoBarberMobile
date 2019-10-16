import styled from 'styled-components/native';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Icon = styled(MdIcon).attrs(props => ({
  name: props.name,
  size: 20,
  color: 'rgba(255, 255, 255, 0.8)',
}))`
  position: absolute;
  top: 14px;
  left: 16px;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
})`
  flex: 1;
  padding-right: 16px;
  padding-left: 48px;
  background: transparent;
  color: white;
  font-size: 16px;
`;
