import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TasksCardsListProps } from '../../../types';
import TasksCard from './TasksCard';

const styles = StyleSheet.create({
    listStyle: {
        flexGrow: 0
    },
    listContentContainerStyle: {
        paddingHorizontal: 32,
    },
    separatorStyle: {
        width: 20,
        height: 16,
    },
});

const CardsSeparator: React.FC<{}> = ({}) => {

    return (
        <View
            style={styles.separatorStyle}
        />
    );

};

const TasksCardsList: React.FC<{ navigation: NativeStackNavigationHelpers } & TasksCardsListProps > = ({
    navigation,
    cards,
}) => {

    const renderTasksCard = useCallback(({item, index}) => {

        return (
            <TasksCard 
                {...item}
                navigation={navigation}
                key={"card" + index.toString()}
            />
        );

    }, []);

    return (
        <FlatList
            horizontal
            data={cards}
            renderItem={renderTasksCard}
            style={styles.listStyle}
            contentContainerStyle={styles.listContentContainerStyle}
            ItemSeparatorComponent={CardsSeparator}
            showsHorizontalScrollIndicator={false}
        />
    );

};

export default memo(TasksCardsList);