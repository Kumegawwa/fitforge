import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import RunScreen from '../screens/RunScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Início" component={DashboardScreen} />
      <Tab.Screen name="Treino" component={WorkoutScreen} />
      <Tab.Screen name="Corrida" component={RunScreen} />
    </Tab.Navigator>
  );
}