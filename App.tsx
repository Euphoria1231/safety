import React from 'react';
import Home from './src/views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './src/views/Register';
import Login from './src/views/Login';
import BrainLogin from './src/views/Login/BrainLogin';

const Stack = createNativeStackNavigator({
  initialRouteName: 'Register',
  screens: {
    'Home': Home,
    'Register': Register,
    'Login': Login,
    'BrainLogin': BrainLogin,
  },
});
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Register"
        component={Register} />
      <Stack.Screen
        name="BrainLogin"
        component={BrainLogin}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
