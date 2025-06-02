// app/screens/DashboardScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './ProfileScreen'; // reutilizamos
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import CalculatorScreen from './CalculatorScreen';
import ProductListScreen from './ProductListScreen';

const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
      <Tab.Screen name="Calculadora" component={CalculatorScreen} />
      <Tab.Screen name="Productos" component={ProductListScreen} />
    </Tab.Navigator>
  );
}
