// Icon button component

import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import * as S from './styles';
import theme from '@theme/index';

interface IconButtonProps extends BorderlessButtonProps {
  name: string;
  color: string;
  size: number;
}

export const IconButton = ({ name, color, size, ...rest }: IconButtonProps) => {
  return (
    <S.Container {...rest}>
      <AntDesign name={name} color={theme.colors[color]} size={size} />
    </S.Container>
  );
};
