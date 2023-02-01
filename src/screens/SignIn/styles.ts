import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space.xl}px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space.xl}px;
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
`;

export const LinkContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  margin: ${props => props.theme.space.xl}px;
`;

export const Separator = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${props => props.theme.colors.disable};
  margin-top: ${props => props.theme.space.xl}px;
  margin-bottom: ${props => props.theme.space.xl}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.space.xl}px;
`;

export const SocialLoginContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${props => props.theme.space.xl}px;
`;
