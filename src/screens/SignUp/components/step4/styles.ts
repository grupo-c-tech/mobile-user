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
