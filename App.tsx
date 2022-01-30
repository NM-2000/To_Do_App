import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={ROUTE_MAP[ROUTES.REGISTER]}
          options={{ headerShown: false, animation: 'slide_from_left' }}
        />
        <Stack.Screen
          name={ROUTES.HOMEPAGE}
          component={ROUTE_MAP[ROUTES.HOMEPAGE]}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name={ROUTES.ADD_NEW_LIST_PAGE}
          component={ROUTE_MAP[ROUTES.ADD_NEW_LIST_PAGE]}
          options={{headerShown: false, animation: 'slide_from_right'}}
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
