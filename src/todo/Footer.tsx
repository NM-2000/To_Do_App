import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    footerContainerStyle: {
        width: '100%',
        flexDirection: 'row',
    },
    homeButtonStyle: {
        flex: 1,
        paddingVertical: 24,
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
    },
    calendarButtonStyle: {
        flex: 1,
        paddingVertical: 24,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
    },
    profileButtonStyle: {
        flex: 1,
        paddingVertical: 24,
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
    },
    pressedButtonStyle: {
        backgroundColor: 'lightgrey',
    },
});

const Footer: React.FC<{
    navigation: NativeStackNavigationHelpers;
    index?: number;
}> = ({ navigation, index = 0 }) => {

    const onHomePress = useCallback(() => {
        console.log("Home Pressed!");
    }, []);

    const onCalendarPress = useCallback(() => {
        console.log("Calendar Pressed!");
    }, []);

    const onProfilePress = useCallback(() => {
        console.log("Profile Pressed!");
    }, []);

    return (
        <View style={styles.footerContainerStyle}>
            <Pressable onPress={onHomePress}
                style={({ pressed }) => [
                    styles.homeButtonStyle,
                    pressed ? styles.pressedButtonStyle : {},
                ]}>
                <FontAwesome5
                    name={'home'}
                    size={20}
                    color={index === 0 ? 'black' : 'grey'}
                />
            </Pressable>
            <Pressable onPress={onCalendarPress}
                style={({ pressed }) => [
                    styles.calendarButtonStyle,
                    pressed ? styles.pressedButtonStyle : {},
                ]}>
                <FontAwesome5
                    name={'calendar-alt'}
                    size={20}
                    color={index === 1 ? 'black' : 'grey'}
                />
            </Pressable>
            <Pressable onPress={onProfilePress}
                style={({ pressed }) => [
                    styles.profileButtonStyle,
                    pressed ? styles.pressedButtonStyle : {},
                ]}>
                <FontAwesome5
                    name={'user'}
                    size={20}
                    color={index === 2 ? 'black' : 'grey'}
                />
            </Pressable>
        </View>
    );
};

export default memo(Footer);
