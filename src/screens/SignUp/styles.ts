import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.space.xl}px;
`;

export const BackButtonContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${props => props.theme.space.xl}px;
`;
