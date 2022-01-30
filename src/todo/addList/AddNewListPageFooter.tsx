import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    footerStyle: {
        width: "100%",
        
    }
});

const AddNewListPageFooter: React.FC<{}> = ({}) => {

    return (
        <View style={styles.footerStyle} >

        </View>
    );

};

export default memo(AddNewListPageFooter);