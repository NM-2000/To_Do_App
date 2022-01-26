import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    addTaskListContainerStyle: {
        alignItems: 'center',
    },
    addTaskListButtonStyle: {
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
    },
    pressedAddTaskListButtonStyle: {
        backgroundColor: 'rgb(50,50,50)',
    },
    addTaskListTextStyle: {
        fontSize: 14,
        color: 'grey',
        fontFamily: 'OpenSans',
        fontWeight: '900',
        marginTop: 16,
    },
});

const ADD_TASK_LIST_TEXT = 'Add List';

const AddTaskList: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({
    navigation,
}) => {
    const onAddListPress = useCallback(() => {
        console.log('Added Task List!');
    }, []);

    return (
        <View style={styles.addTaskListContainerStyle}>
            <Pressable
                style={({ pressed }) => [
                    styles.addTaskListButtonStyle,
                    pressed ? styles.pressedAddTaskListButtonStyle : {},
                ]}
                onPress={onAddListPress}>
                <FontAwesome5 name={'plus'} size={20} />
            </Pressable>
            <Text style={styles.addTaskListTextStyle}>{ADD_TASK_LIST_TEXT}</Text>
        </View>
    );
};

export default memo(AddTaskList);
