import {View, Text} from 'react-native';
import React from 'react';
import {images, COLORS, SIZES, FONTS} from '../constants';
import CustomButtons from './CustomButtons';
import {useNavigation} from '@react-navigation/native';

const LoginDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
      {/* Description */}
      <Text
        style={{
          marginTop: SIZES.radius,
          width: '70%',
          color: COLORS.gray,
          ...FONTS.body3,
        }}>
        Discover more than 1200 food recipes in your hands and cooking it
        easily!
      </Text>

      {/* Buttons */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        {/* Login */}
        <CustomButtons
          buttonText="Login"
          colors={[COLORS.darkGreen, COLORS.lime]}
          buttonContainerStyle={{paddingVertical: 18, borderRadius: 20}}
          onPress={() => navigation.replace('Home')}
        />
        {/* Sign Up */}
        <CustomButtons
          buttonText="Sign Up"
          colors={[]}
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            marginTop: SIZES.radius,
            borderColor: COLORS.darkLime,
            borderWidth: 1,
          }}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  );
};

export default LoginDetail;
