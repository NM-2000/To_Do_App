import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { TasksCardProps } from '../../../types';
import Footer from '../Footer';
import AddTaskList from './AddTaskList';
import HomePageTitle from './HomePageTitle';
import TasksCardsList from './TasksCardsList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    homepageContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    homepageStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    homepageIconStyle: {
        marginHorizontal: 32,
        marginVertical: 48,
    }
});

const cards: TasksCardProps[] = [
    {
        title: "Trip to Paris",
        bgColor: "tomato",
        tasks: [
            {
                description: "Book Flights",
                finished: true,
            },
            {
                description: "Passport check",
                finished: true,
            },
            {
                description: "Packing luggage",
                finished: false,
            },
            {
                description: "Hotel reservation",
                finished: false,
            }
        ]
    },
    {
        title: "My Tasks",
        bgColor: "purple",
        tasks: [
            {
                description: "Buy milk",
                finished: false,
            },
            {
                description: "Plan weekend",
                finished: false,
            },
            {
                description: "Publish Friday Newsletter",
                finished: true,
            },
            {
                description: "Run 3 miles",
                finished: false,
            }
        ]
    },
    {
        title: "Office Week",
        bgColor: "seagreen",
        tasks: [
            {
                description: "Update Jira",
                finished: true,
            },
            {
                description: "Attend standup",
                finished: false,
            },
            {
                description: "Release bundles",
                finished: true,
            }
        ]
    }
];

const HomePage: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({
    navigation,
}) => {
    return (
        <View style={styles.homepageContainerStyle}>
            <View style={styles.homepageIconStyle} >
                <FontAwesome5
                    name={"pencil-alt"}
                    size={32}
                    color={"black"}
                />
            </View>
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
                {
                    /**
                     * Horizontal ScrollView/Flatlist to Show Task Lists / Variable Section
                     */
                    <TasksCardsList
                        navigation={navigation}
                        cards={cards}
                    />
                }
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
