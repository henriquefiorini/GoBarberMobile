import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
