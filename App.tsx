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
import LoanDetailsScreen from './screens/LoanDetailsScreen';
import LoanHistoryScreen from './screens/LoanHistoryScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';

I18nManager.forceRTL(true);

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// محاكاة نوع المستخدم: 'user' | 'governorAdmin' | 'superAdmin'
const userType: 'user' | 'governorAdmin' | 'superAdmin' = 'superAdmin'; // غيّرها لتجربة الصلاحيات

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
      <Tab.Screen name="سجل السلف" component={LoanHistoryScreen} />
      <Tab.Screen name="الإشعارات" component={NotificationsScreen} />
      <Tab.Screen name="الإعدادات" component={SettingsScreen} />
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
        <Drawer.Screen name="سجل السلف" component={LoanHistoryScreen} />
        <Drawer.Screen name="الإشعارات" component={NotificationsScreen} />
        <Drawer.Screen name="الإعدادات" component={SettingsScreen} />
        <Drawer.Screen name="الدعم الفني" component={SupportScreen} />
        <Drawer.Screen name="تفاصيل السلفة" component={LoanDetailsScreen} options={{ drawerLabel: '', title: '', drawerItemStyle: { height: 0 } }} />
        {/* لوحة الإدارة تظهر فقط للمدير */}
        {(userType === 'superAdmin' || userType === 'governorAdmin') && (
          <Drawer.Screen name="لوحة الإدارة" component={AdminDashboardScreen} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
