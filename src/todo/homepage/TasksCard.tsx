import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import _ from 'lodash';
import { TaskProps, TasksCardProps } from '../../../types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    tasksCardStyle: {
        width: 175,
        height: 300,
        paddingVertical: 32,
        paddingLeft: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
    },
    titleTextStyle: {
        fontSize: 18,
        fontFamily: "OpenSans",
        fontWeight: "900",
        color: 'white',
    },
    linearStyle: {
        height: 1,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 20,
    },
    spaceStyle: {
        width: 16,
        height: 16,
    },
    taskTextStyle: {
        fontSize: 14,
        fontFamily: 'OpenSans',
        fontWeight: "900",
        color: "white",
        paddingLeft: 12,
    },
    taskContainerStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    viewContainerStyle: {
        alignSelf: 'flex-end',
        marginRight: 16,
    },
    viewTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'OpenSans',
        fontWeight: "900",
    }, 
    pressedViewTextStyle: {
        color: 'black',
    },
});

const VIEW = "View >>";

const TasksCard: React.FC<{ navigation: NativeStackNavigationHelpers } & TasksCardProps> = ({ 
    navigation,
    title,
    bgColor,
    tasks,
}) => {

    const onViewPress = useCallback(() => {
        console.log("View Presssed!");
    }, []);

    return (
        <Pressable style={[styles.tasksCardStyle, { backgroundColor: bgColor }]} >
            <View>
                <Text style={styles.titleTextStyle} numberOfLines={1} >
                    { title }
                </Text>
                <View style={styles.linearStyle} />
                {
                    _.map(tasks, (task: TaskProps, index: number) => {
                        if(index >= 4) {
                            return null;
                        }
                        return (
                            <View key={index.toString()} >
                                {
                                    (index > 0) ? <View style={styles.spaceStyle} /> : null
                                }
                                <View style={styles.taskContainerStyle} >
                                    <FontAwesome5 
                                        name={"circle"}
                                        size={10}
                                        color="white"
                                        solid
                                    />
                                    <Text numberOfLines={1} style={[styles.taskTextStyle, task.finished ? { textDecorationLine: 'line-through' } : {}]} >
                                        { task.description }
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <Pressable style={styles.viewContainerStyle} onPress={onViewPress} >
                {
                    ({ pressed }) => (
                        <Text style={[ styles.viewTextStyle
                        , pressed ? styles.pressedViewTextStyle : {} ]} >
                            { VIEW }
                        </Text>
                    )
                }
            </Pressable>
        </Pressable>
    );

};

export default memo(TasksCard);