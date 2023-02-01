import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import type { StepComponentProps } from '../../index'
import { ForgotPasswordStep3 } from "../step3";

import * as S from "./styles";
import axios from "axios";
import { api } from "@services/api";

export const ForgotPasswordStep2: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);

  async function handleSubmit() {
    if (!enabled) return;

    await api.post('users/passwords/verify', {
      email: formData.email,
      code: formData.code,
    }).then((response) => {
      setFormData({...formData, token: response.data.token})
      setStepComponent(() => ForgotPasswordStep3)
      setStep(3)
    }).catch((error) => {
      console.log(error)
    });
  }


  useEffect(() => {
    setEnabled(!!formData.code && formData?.code?.length === 4)
  }, [setEnabled, formData?.code])

  return (
    <S.Container>
      <S.Header>
      <Typograph color="primary" size="xl" weight="bold">Insert code</Typograph>
        <Typograph>You recive code in your email</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Code" value={formData.code} onChangeText={(text) => setFormData({...formData, code: text})}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleSubmit}/>
      </S.Content>
    </S.Container>
  )
}
