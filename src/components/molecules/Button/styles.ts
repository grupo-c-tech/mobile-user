import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${props => props.theme.space.lg}px;
  background-color: ${props =>
    !props.enabled ? props.theme.colors.disable : props.theme.colors.secondary};
  border-radius: ${props => props.theme.radius.md}px;
  align-items: center;
  justify-content: center;
`;
