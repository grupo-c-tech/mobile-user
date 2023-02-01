// component Link

import { Typograph } from '@components/atoms/Typograph';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type LinkProps = TouchableOpacityProps & {
  title: string;
};

export function Link({ title, ...rest }: LinkProps) {
  return (
    <S.Container {...rest}>
      <Typograph size='xs' color='secondary' weight='bold'>{title}</Typograph>
    </ S.Container>
  );
}
