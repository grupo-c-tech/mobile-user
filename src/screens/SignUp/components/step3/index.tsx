import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import type { StepComponentProps } from '../../index'

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SignUpStep4 } from "../step4";

export const SignUpStep3: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [enabled, setEnabled] = useState(false);

  function handleNextStep() {
    if (!enabled) return;
    setStepComponent(() => SignUpStep4)
    setStep(4)
  }

  useEffect(() => {
    setEnabled(
      !!formData.address.street ||
      !!formData.address.number ||
      !!formData.address.district ||
      !!formData.address.city ||
      !!formData.address.state ||
      !!formData.address.zip_code ||
      !!formData.address.country
    )
  }, [
    formData.address.street ||
    formData.address.number ||
    formData.address.district ||
    formData.address.city ||
    formData.address.state ||
    formData.address.zip_code ||
    formData.address.country
  ])

  return (
    <S.Container>
      <S.Header>
        <Typograph color="primary" size="xl" weight="bold">Welcome!</Typograph>
        <Typograph color="text" size="lg" weight="medium">Create your account.</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <S.InputStreetContainer>
            <Input placeholder="Street" style={{width: '65%'}} value={formData.address.street} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, street: text}})}/>
            <Input placeholder="Number" style={{width: '30%'}} value={formData.address.number} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, number: text}})}/>
          </S.InputStreetContainer>
          <Input placeholder="District" value={formData.address.district} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, district: text}})}/>
          <Input placeholder="City" value={formData.address.city} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, city: text}})}/>
          <Input placeholder="State" value={formData.address.state} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, state: text}})}/>
          <Input placeholder="Zip code" value={formData.address.zip_code} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, zip_code: text}})}/>
          <Input placeholder="Country" value={formData.address.country} onChangeText={(text) => setFormData({ ...formData, address: { ...formData.address, country: text}})}/>

        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleNextStep}/>
      </S.Content>
    </S.Container>
  )
}

// street: string,
// number: string,
// district: string,
// city: string,
// state: string,
// zip_code: string,
// country: string,
