import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { SignUpStep3 } from "../step3";
import type { StepComponentProps } from '../../index'

import * as S from "./styles";

export const SignUpStep2: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);

  function handleNextStep() {
    if (!enabled) return;
    setStepComponent(() => SignUpStep3)
    setStep(3)
  }

  useEffect(() => {
    setEnabled(!!formData.email || !!formData.phone_number)
  }, [formData.email || formData.phone_number])

  return (
    <S.Container>
      <S.Header>
        <Typograph color="primary" size="xl" weight="bold">Your contacts!</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Email"  autoCapitalize="none" value={formData.email} onChangeText={(text) => setFormData({...formData, email: text})}/>
          <Input placeholder="Phone number" value={formData.phone_number} onChangeText={(text) => setFormData({...formData, phone_number: text})}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleNextStep}/>
      </S.Content>
    </S.Container>
  )
}
