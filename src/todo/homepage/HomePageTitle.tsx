import React,  { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    titleContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    linearStyle: {
        backgroundColor: 'grey',
        width: '20%',
        height: 1,
    },
    textContainerStyle: {
        flexDirection: 'row',
    },
    firstTextStyle: {
        fontSize: 32,
        color: 'grey',
        fontFamily: 'OpenSans',
        fontWeight: "900",
    },
    lastTextStyle: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'OpenSans',
        fontWeight: "900",
    },
});

const HOME_PAGE_TITLE = {
    FIRST: 'Tasks ',
    LAST: 'Lists',
};

const HomePageTitle: React.FC<{}> = ({}) => {

    return (
        <View style={styles.titleContainerStyle} >
            <View style={styles.linearStyle} />
            <View style={styles.textContainerStyle} >
                <Text style={styles.firstTextStyle} >
                    { HOME_PAGE_TITLE.FIRST }
                </Text>
                <Text style={styles.lastTextStyle} >
                    { HOME_PAGE_TITLE.LAST }
                </Text>
            </View>
            <View style={styles.linearStyle} />
        </View>
    );

};

export default memo(HomePageTitle);