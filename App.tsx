import React from 'react';
import Home from './src/views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './src/views/Register';
import Login from './src/views/Login';
import BrainLogin from './src/views/Login/BrainLogin';
import ModifyBrainWave from './src/views/BrainWave/ModifyBrainWave';
import ChangePassword from './src/views/ChangePassword';
import Edit from './src/views/Edit';
import User from './src/views/User';
import Search from './src/views/Search';
import Article from './src/views/Article';
import { Icon, Provider } from '@ant-design/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/contexts/Auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 主要底部标签导航
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#999999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '搜索',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarLabel: '编辑',
          tabBarIcon: ({ color }) => (
            <Icon name="edit" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 根堆栈导航
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="BrainLogin"
        component={BrainLogin}
      />
      <Stack.Screen
        name="ModifyBrainWave"
        component={ModifyBrainWave}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Article"
        component={Article}
      />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider>
        <NavigationContainer>
          <AuthProvider>
            <RootStack />
          </AuthProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
