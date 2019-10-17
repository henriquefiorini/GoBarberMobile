import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: white;
  opacity: ${props => (props.isPast ? 0.5 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const Info = styled.View`
  margin-right: 16px;
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 600;
`;

export const Time = styled.Text`
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
