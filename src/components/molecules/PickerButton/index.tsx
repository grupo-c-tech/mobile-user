import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Typograph } from '@components/atoms/Typograph';

import * as S from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type ButtonProps = RectButtonProps & {
  title: string;
  children?: React.ReactNode;
  enebled?: boolean;
};

export function PickerButton({ title, enebled, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <Typograph size='xs' color={enebled ? 'primary': 'disable'} weight='bold'>{title}</Typograph>
    </ S.Container>
  );
}
