import React, { useEffect, useState } from "react";

import { Typograph } from "@components/atoms/Typograph";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import type { StepComponentProps } from '../../index'
import { Picker } from '@react-native-picker/picker';
import { Gender } from "../../../../constants"

import * as S from "./styles";
import { SignUpStep2 } from "../step2";
import { PickerButton } from "@components/molecules/PickerButton";
import Modal from "react-native-modal";

export const SignUpStep1: React.FC<StepComponentProps> = ({ formData, setFormData, setStepComponent, setStep }: StepComponentProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const genderLabel = Gender.find((item) => item.value === formData.genre)?.label || 'Select your gender!';

  function handleNextStep() {
    if(!enabled) return;
    setStepComponent(() => SignUpStep2)
    setStep(2)
  }

  useEffect(() => {
    setEnabled(!!formData.genre || !!formData.name)
  }, [formData.genre || formData.name])

  return (
    <S.Container>
      <S.Header>
        <Typograph color="primary" size="xl" weight="bold">Welcome!</Typograph>
        <Typograph color="text" size="lg" weight="medium">Create your account.</Typograph>
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <Input placeholder="Name" value={formData.name} onChangeText={(text) => setFormData({...formData, name: text})}/>
          <PickerButton title={formData.genre ? genderLabel : 'Select your gender'} enebled={genderLabel !== 'Select your gender!'} onPress={() => setModalVisible(true)}/>
        </S.InputContainer>
        <Button title="Next" enebled={enabled} onPress={handleNextStep}/>
      </S.Content>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible( false )}>
        <S.ModalContainer >
          <Typograph color="primary" size="lg" weight="bold">Select your gender</Typograph>
          <Picker mode="dropdown" selectedValue={formData.genre} onValueChange={(itemValue) => setFormData({...formData, genre: itemValue})} >
            {
              Gender.map(gender => (<Picker.Item label={gender.label} value={gender.value}/>))
            }
          </Picker>
          <Button title="Done" enabled={true} onPress={() => setModalVisible( false )} />
        </ S.ModalContainer>
      </Modal>
    </S.Container>
  )
}
