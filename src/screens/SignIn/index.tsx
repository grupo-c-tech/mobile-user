import { Typograph } from '@components/atoms/Typograph';
import { Button } from '@components/molecules/Button';
import { IconButton } from '@components/molecules/IconButton';
import { Input } from '@components/molecules/Input';
import { Link } from '@components/molecules/Link';
import { API_URL } from '@env';
import { api } from '@services/api';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import * as S from './styles';

export function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { navigate } = useNavigation();

  async function handleSignIn() {
    api.post('users/sessions', {
      email: email.toLowerCase(),
      password
    })
  }

  return (
      <S.Container>
        <S.Header>
          <Typograph size='xl' weight='bold' color='title'>Hello Again!</Typograph>
          <Typograph size='lg' weight='regular'>Welcome back you've been missed!</Typograph>
        </ S.Header>
        <S.Content>
          <S.InputContainer>
            <Input placeholder='Email' value={email} onChangeText={setEmail} autoCapitalize="none"/>
            <Input placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword}/>
          </S.InputContainer>
          <S.LinkContainer>
            <Link title='Forgot my password' onPress={() => { navigate('ForgotPassword' as never) }}/>
          </S.LinkContainer>
          <Button title='Sign In' enabled={email && password ? true : false} onPress={handleSignIn} />
        </S.Content>
        <S.Separator />
        <S.Footer>
          <S.SocialLoginContainer>
            <IconButton name='google' size={RFValue(32)} color='black'></IconButton>
            <IconButton name='facebook-square' size={RFValue(32)} color='black'></IconButton>
            <IconButton name='apple1' size={RFValue(32)} color='black'></IconButton>
          </ S.SocialLoginContainer>
          <Typograph size='md' weight='regular'>Don't have an account?</Typograph>
          <Link title='Sign Up' onPress={() => { navigate('SignUp' as never) }}/>
        </S.Footer>
      </S.Container>
  );
}
