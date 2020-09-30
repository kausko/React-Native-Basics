import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default ({ navigation }) => {

    const { colors } = useTheme();

    return (
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: colors.background}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
};