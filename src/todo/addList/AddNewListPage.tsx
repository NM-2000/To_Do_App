import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddNewListPageFooter from './AddNewListPageFooter';

const styles = StyleSheet.create({
    addListPageStyle: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 32,
        justifyContent: 'space-between'
    },
    addListIconStyle: {
        marginHorizontal: 32,
        marginVertical: 48,
    }
});

const AddNewListPage: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({ navigation }) => {
 
    return (
        <View style={styles.addListPageStyle} >
            {
                /**
                 * Icon same as HomePage
                 */
                <View style={styles.addListIconStyle} >
                    <FontAwesome5
                        name={"pencil-alt"}
                        size={32}
                        color={"black"}
                    />
                </View>
            }
            {
                /**
                 * Section for Inputting List Title
                 */
            }
            {
                /**
                 * Section for Adding Tasks
                 */
            }
            {
                /**
                 * Footer for Page
                 */
                <AddNewListPageFooter />
            }
        </View>
    );

};

export default memo(AddNewListPage);