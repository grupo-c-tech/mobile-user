import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '@screens/SignIn';
import { SignUpScreen } from '@screens/SignUp';
import { ForgotPassword } from '@screens/ForgotPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
