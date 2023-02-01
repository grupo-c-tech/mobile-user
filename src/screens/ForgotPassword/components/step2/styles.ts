import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space.xl}px;
`;

export const ModalContainer = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.lg}px;
  border-radius: ${props => props.theme.radius.md}px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
