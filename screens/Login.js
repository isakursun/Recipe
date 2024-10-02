import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { images, COLORS, SIZES, FONTS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/LoginHeader';
import LoginDetail from '../components/LoginDetail';

const Login = ({ navigation }) => {
    return (
        <View style={{flex:1, backgroundColor: COLORS.black}}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
                <Header />
            {/* Detail */}
                <LoginDetail />
            
        </View>
    )
}

export default Login;