import styled from 'styled-components/native';

export const Appointment = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-bottom: 8px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const Time = styled.Text`
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;
