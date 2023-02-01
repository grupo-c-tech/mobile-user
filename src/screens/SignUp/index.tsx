import React, { useEffect, useState } from "react";

import { IconButton } from "@components/molecules/IconButton";

import  * as S from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { SignUpStep1 } from "./components/step1";
import { SignUpStep2 } from "./components/step2";
import { SignUpStep3 } from "./components/step3";
import { SignUpStep4 } from "./components/step4";
import { KeyboardAvoidingView, Platform } from "react-native";

interface SignUpFormData {
  name?: string,
  email?: string,
  password?: string,
  password_confirmation?: string,
  genre?: string,
  phone_number?: string,
  address: {
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    zip_code: string,
    country: string,
  }
}

type SetStepComponent = React.Dispatch<React.SetStateAction<React.FC<StepComponentProps>>>

export interface StepComponentProps {
  formData: SignUpFormData;
  setFormData: (data: SignUpFormData) => void;
  setStepComponent: SetStepComponent;
  setStep: (step: number) => void;
}

export function SignUpScreen() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    genre: '',
    phone_number: '',
    address: {
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      zip_code: '',
      country: '',
  }})
  const [StepComponent, setStepComponent] = useState(() => SignUpStep1)
  const [step, setStep] = React.useState(1)
  const { navigate } = useNavigation()

  function handleBack() {
    if (step > 1) {
      setStep(step - 1);
    }

    if (step === 1) {
      navigate('SignIn' as never);
    }
  }

  function handleBackButton() {
    if (step === 1) {
      navigate('SignIn' as never);
    }

    if (step > 1) {
      setStep(step - 1);
    }

    if (step === 2) {
      setStepComponent(() => SignUpStep1);
    }

    if (step === 3) {
      setStepComponent(() => SignUpStep2);
    }

    if (step === 4) {
      setStepComponent(() => SignUpStep3);
    }
  }

  return (
    <S.Container>
        <S.BackButtonContainer>
          <IconButton name="back" size={RFValue(24)} color="primary" onPress={() => handleBackButton()}/>
        </S.BackButtonContainer>

        <StepComponent formData={formData} setFormData={setFormData} setStepComponent={setStepComponent} setStep={setStep}/>
    </S.Container>
  );
}
