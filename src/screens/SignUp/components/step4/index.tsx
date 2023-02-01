import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { SignUpStep3 } from "../step3";
import type { StepComponentProps } from '../../index'
import { SignUpStep1 } from "../step1";
import { api } from "@services/api";

import * as S from "./styles";

export const SignUpStep4: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);

  const {navigate} = useNavigation();

  async function handleNextStep() {
    if (!enabled) return;
    await api.post('users', formData).then((response) => {
      setStepComponent(SignUpStep1 as React.FC<{}>)
      setStep(1)
      navigate('SignIn' as never)
    }).catch((error) => {
      console.log(formData.name)
      console.log(error.body)
    })
  }

  useEffect(() => {
    setEnabled(!!formData.password || !!formData.password_confirmation)
  }, [formData.password || formData.password_confirmation])
  return (
    <S.Container>
      <S.Header>
        <Typograph color="primary" size="xl" weight="bold">Choose your password!</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Password" secureTextEntry={true} value={formData.password} onChangeText={(text) => setFormData({...formData, password: text})}/>
          <Input placeholder="Password Confirmation" secureTextEntry={true} value={formData.password_confirmation} onChangeText={(text) => setFormData({...formData, password_confirmation: text})}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleNextStep}/>
      </S.Content>
    </S.Container>
  )
}
