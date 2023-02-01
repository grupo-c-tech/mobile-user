import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  padding: ${props => props.theme.space.lg}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md}px;
  font-size: ${props => props.theme.fontSizes.xs}px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.primary};
  box-shadow: 4px 4px 0px #e2e1e1;
  margin-bottom: ${props => props.theme.space.xs}px;
`;
