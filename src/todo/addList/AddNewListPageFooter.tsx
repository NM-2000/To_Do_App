import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    footerStyle: {
        width: '100%',
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerStylishBarStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    barOneStyle: {
        width: 6,
        height: 16,
        backgroundColor: 'purple',
        borderRadius: 4,
    },
    barTwoStyle: {
        width: 6,
        height: 32,
        backgroundColor: 'red',
        marginHorizontal: 10,
        borderRadius: 4,
    },
    barThreeStyle: {
        width: 6,
        height: 16,
        backgroundColor: '#FFD700',
        borderRadius: 4,
    },
    barFourStyle: {
        width: 6,
        height: 16,
        backgroundColor: 'grey',
        marginHorizontal: 10,
        borderRadius: 4,
    },
    barFiveStyle: {
        width: 6,
        height: 16,
        backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 4,
    },
    barSixStyle: {
        width: 6,
        height: 16,
        backgroundColor: 'orange',
        borderRadius: 4,
    },
    plusButtonStyle: {
        paddingHorizontal: 28,
        paddingVertical: 24,
        backgroundColor: 'rgb(220, 20, 60)',
        borderRadius: 8,
        elevation: 10,
    },
    pressedPlusButtonStyle: {
        backgroundColor: 'red',
        elevation: 0,
    },
});

const FooterStylishBar: React.FC<{}> = ({ }) => {
    return (
        <View style={styles.footerStylishBarStyle}>
            <View style={styles.barOneStyle} />
            <View style={styles.barTwoStyle} />
            <View style={styles.barThreeStyle} />
            <View style={styles.barFourStyle} />
            <View style={styles.barFiveStyle} />
            <View style={styles.barSixStyle} />
        </View>
    );
};

const AddNewListPageFooter: React.FC<{}> = ({ }) => {
    const onAddNewListPress = useCallback(() => {
        console.log('New List Added!!');
    }, []);

    return (
        <View style={styles.footerStyle}>
            <FooterStylishBar />
            <Pressable
                onPress={onAddNewListPress}
                style={({ pressed }) => [
                    styles.plusButtonStyle,
                    pressed ? styles.pressedPlusButtonStyle : {},
                ]}>
                <FontAwesome5 name={'plus'} size={20} color={'white'} />
            </Pressable>
        </View>
    );
};

export default memo(AddNewListPageFooter);
