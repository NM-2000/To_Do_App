import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return <View style={styles.backgroundStyle}></View>;
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default App;
