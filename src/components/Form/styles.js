import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingRight: 24,
    paddingLeft: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 0 1 auto;
  width: 100%;
  margin-bottom: 24px;
`;
