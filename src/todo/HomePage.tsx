import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    homepageContainerStyle: {
        flex: 1,
        backgroundColor: 'rgb(30,30,30)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const HomePage: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({ navigation }) => {

    return (
        <View style={styles.homepageContainerStyle} >
            <Text>HomePage</Text>
        </View>
    );

};

export default memo(HomePage);