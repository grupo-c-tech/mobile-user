import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    primary: '#0C1446',
    primaryLight: '#2740DA',

    secondary: '#FF5700',

    title: '#0A0226',
    text: '#808080',

    background: '#F5F5F5',
    disable: '#C0C0C0',

    white: '#FFFFFF',
    black: '#000000',
  },

  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold',
  },

  fontSizes: {
    xs: RFValue(12),
    md: RFValue(14),
    lg: RFValue(16),
    xl: RFValue(24),
  },

  space: {
    none: RFValue(0),
    xs: RFValue(8),
    md: RFValue(12),
    lg: RFValue(16),
    xl: RFValue(24),
  },

  radius: {
    none: RFValue(0),
    xs: RFValue(8),
    md: RFValue(12),
    lg: RFValue(16),
  },
};
