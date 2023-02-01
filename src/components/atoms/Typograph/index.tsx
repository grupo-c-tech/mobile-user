// component: Typograph

import React from 'react';
import { Text, TextProps } from 'react-native';

import theme from '@theme/index';

type TypographProps = TextProps & {
  children: React.ReactNode;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fonts;
};

export function Typograph({
  children,
  color = 'text',
  size = 'md',
  weight = 'regular',
  ...rest
}: TypographProps) {
  return (
    <Text
      style={{
        color: theme.colors[color],
        fontSize: theme.fontSizes[size],
        fontFamily: theme.fonts[weight],
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}
