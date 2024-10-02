import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {images, COLORS, SIZES, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
      <ImageBackground
        source={images.loginBackground}
        style={{flex: 1, justifyContent: 'flex-end'}}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: 200,
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              width: '80%',
              color: COLORS.white,
              ...FONTS.largeTitle,
              lineHeight: 45,
            }}>
            Cooking a Delicious Food Easily
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Header;
