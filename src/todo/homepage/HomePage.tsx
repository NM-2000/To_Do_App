import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Footer from '../Footer';
import AddTaskList from './AddTaskList';
import HomePageTitle from './HomePageTitle';

const styles = StyleSheet.create({
    homepageContainerStyle: {
        flex: 1,
        backgroundColor: 'rgb(30,30,30)',
    },
    homepageStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

const HomePage: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({
    navigation,
}) => {
    return (
        <View style={styles.homepageContainerStyle}>
            <View style={styles.homepageStyle}>
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
                    <AddTaskList navigation={navigation} />
                }
                {/**
         * Horizontal ScrollView/Flatlist to Show Task Lists / Variable Section
         */}
            </View>
            {
                /**
                 * Footer for HomePage / Static Section
                 */
                <Footer navigation={navigation} index={0} />
            }
        </View>
    );
};

export default memo(HomePage);
