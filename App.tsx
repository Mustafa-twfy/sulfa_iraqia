/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import CreateLoanScreen from './screens/CreateLoanScreen';

I18nManager.forceRTL(true);

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: '#f8f8f8', height: 60 },
        tabBarActiveTintColor: '#2C5F4A',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      }}
    >
      <Tab.Screen name="الرئيسية" component={MainScreen} />
      <Tab.Screen name="انشاء سلفة جديدة" component={CreateLoanScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          drawerPosition: 'right',
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen name="الشاشات" component={Tabs} options={{ drawerLabel: 'الشاشات' }} />
        <Drawer.Screen name="الرئيسية" component={MainScreen} />
        <Drawer.Screen name="انشاء سلفة جديدة" component={CreateLoanScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
