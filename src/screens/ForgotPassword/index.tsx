import React, { useState } from 'react';

import { ForgotPasswordStep1 } from './components/step1';

import * as S from './styles';
import { IconButton } from '@components/molecules/IconButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

interface ForgotPasswordFormData {
  email?: string;
  code?: string;
  token?: string;
  password?: string;
  password_confirmation?: string;
}

export interface StepComponentProps {
  formData: ForgotPasswordFormData;
  setFormData: (data: ForgotPasswordFormData) => void;
  setStepComponent: SetStepComponent;
  setStep: (step: number) => void;
}

type SetStepComponent = React.Dispatch<React.SetStateAction<React.FC<StepComponentProps>>>

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: '',
    code: '',
  })
  const [StepComponent, setStepComponent] = useState(() => ForgotPasswordStep1)
  const [step, setStep] = React.useState(1)
  const { navigate } = useNavigation();


  function handleBackButton() {
    if (step === 1) {
      navigate('SignIn' as never);
    }

    if (step > 1) {
      setStep(step - 1);
    }

    if (step === 2) {
      setStepComponent(() => ForgotPasswordStep1);
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

export default ForgotPassword;
