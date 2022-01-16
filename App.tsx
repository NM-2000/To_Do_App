import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Login } from './src';

const App = () => {
  return (
    <>
      <Login />
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
