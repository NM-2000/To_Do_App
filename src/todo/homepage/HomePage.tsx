import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomePageTitle from './HomePageTitle';

const styles = StyleSheet.create({
    homepageContainerStyle: {
        flex: 1,
        backgroundColor: 'rgb(30,30,30)',
        paddingTop: 100,
    }
});

const HomePage: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({ navigation }) => {

    return (
        <View style={styles.homepageContainerStyle} >
            {
                /**
                 * Header Implementation / Static Section
                 */
                <HomePageTitle />
            }
            {
                /**
                 * Add Task List Implementation / Static Section
                 */
            }
            {
                /**
                 * Horizontal ScrollView/Flatlist to Show Task Lists / Variable Section
                 */
            }
            {
                /**
                 * Footer for HomePage / Static Section
                 */
            }
        </View>
    );

};

export default memo(HomePage);