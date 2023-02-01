import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${props => props.theme.space.lg}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md}px;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 4px 4px 0px #e2e1e1;
  margin-bottom: ${props => props.theme.space.xs}px;
`;
