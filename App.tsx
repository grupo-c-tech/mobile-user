import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from '@routes/index';

import reactotron from './src/config/reactotron';

import theme from '@theme/index';

if (true) { reactotron.connect(); }

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </ThemeProvider>
  );
}
