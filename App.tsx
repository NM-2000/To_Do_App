import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Login, Register } from './src';

const App = () => {
  return (
    <>
      <Register />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default App;
