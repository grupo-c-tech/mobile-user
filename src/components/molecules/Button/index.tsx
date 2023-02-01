//component: Button


import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Typograph } from '@components/atoms/Typograph';

import * as S from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type ButtonProps = RectButtonProps & {
  title: string;
  enebled?: boolean;
  children?: React.ReactNode;
};

export function Button({ title, enebled, ...rest }: ButtonProps) {
  return (
    <S.Container enabled={enebled} {...rest}>
      <Typograph size='md' color='white' weight='bold'>{title}</Typograph>
    </ S.Container>
  );
}
