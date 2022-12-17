import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </ThemeProvider>
  );
}
