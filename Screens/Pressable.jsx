import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default ({ navigation }) => {

    const [pressCnt, setPressCnt] = useState(0);
    const [pressInCnt, setPressInCnt] = useState(0);
    const [pressOutCnt, setPressOutCnt] = useState(0);
    const [longCnt, setLongCnt] = useState(0);

    const {colors} = useTheme();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable
                onPress={() => setPressCnt(pressCnt + 1)}
                onPressIn={() => setPressInCnt(pressInCnt + 1)}
                onPressOut={() => setPressOutCnt(pressOutCnt + 1)}
                onLongPress={() => setLongCnt(longCnt + 1)}
            >
                <Text style={{color: colors.text}}>
                    {"Press Count: " + pressCnt + "\n"}
                    {"Press In Count: " + pressInCnt + "\n"}
                    {"Press Out Count: " + pressOutCnt + "\n"}
                    {"Long Press Count: " + longCnt + "\n"}
                </Text>
            </Pressable>
        </View>
    )
}