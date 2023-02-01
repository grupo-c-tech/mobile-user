import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { ForgotPasswordStep2 } from "../step2";
import type { StepComponentProps } from '../../index'
import { api } from "@services/api";

import * as S from "./styles";

export const ForgotPasswordStep1: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);

  async function handleNextStep() {
    if (!enabled) return;

    await api.post('users/passwords/forgot', {
      email: formData.email
    }).then((response) => {
      setStepComponent(() => ForgotPasswordStep2)
      setStep(2)
    }).catch((error) => {
      console.log(error.message)
    });
  }

  useEffect(() => {
    setEnabled(!!formData.email )
  }, [formData.email])

  return (
    <S.Container>
      <S.Header>
        <Typograph color="primary" size="xl" weight="bold">Forgot your password?</Typograph>
        <Typograph>Enter your email address below and we'll send you a link to reset your password.</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Email" autoCapitalize="none" value={formData.email} onChangeText={(text) => setFormData({...formData, email: text})}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleNextStep}/>
      </S.Content>
    </S.Container>
  )
}
