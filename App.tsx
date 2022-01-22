import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from './src';
import { ROUTES } from './routes';
import { ROUTE_MAP } from './routeMap';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={ROUTE_MAP[ROUTES.LOGIN]}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={ROUTE_MAP[ROUTES.REGISTER]}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default App;
