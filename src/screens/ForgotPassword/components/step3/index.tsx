import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import type { StepComponentProps } from '../../index'

import * as S from "./styles";
import { api } from "@services/api";
import { useNavigation } from "@react-navigation/native";

export const ForgotPasswordStep3: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);
  const { navigate } = useNavigation();

  async function handleSubmit() {
    if (!enabled) return;

    await api.post('users/passwords/reset', {
      token: formData.token,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    }).then((response) => {
      setStep(1)
      navigate('SignIn' as never);
    }).catch((error) => {
      console.log(error)
    });
  }


  useEffect(() => {
    setEnabled(!!formData?.password && !!formData?.password_confirmation)
  }, [setEnabled, formData?.password_confirmation, formData?.password])

  return (
    <S.Container>
      <S.Header>
      <Typograph color="primary" size="xl" weight="bold">Choice your new password</Typograph>
        <Typograph>Your email was verified. Write your new password for sign in.</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Password" value={formData.password} onChangeText={(text) => setFormData({...formData, password: text})}/>
          <Input placeholder="Password Confirmation" value={formData.password_confirmation} onChangeText={(text) => setFormData({...formData, password_confirmation: text})}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleSubmit}/>
      </S.Content>
    </S.Container>
  )
}
