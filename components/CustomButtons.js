import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomButtons = ({buttonText, buttonContainerStyle, colors, onPress}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={{...buttonContainerStyle}}>
          <Text style={{textAlign: 'center', color: COLORS.white, ...FONTS.h2}}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
        <Text
          style={{textAlign: 'center', color: COLORS.lightGreen, ...FONTS.h2}}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButtons;
