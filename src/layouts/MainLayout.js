import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Appbar} from 'react-native-paper';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Store } from '../pages/Store';
import { User } from '../pages/User';
import Screen from './Screen';
import Main from '../pages/Main';

const Tab = createMaterialBottomTabNavigator();

export function MainLayout({ children }) {


  return (
    <NavigationContainer>

      <Tab.Navigator
        labeled={false}
        barStyle={{ backgroundColor: "#F94E6D" }}
        activeColor="white"
        inactiveColor="black"
      >
        <Tab.Screen
          name="Main"
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={32} />
            ),
          }}
        />

        <Tab.Screen
          name="Store"
          children={() => <Screen title="Lojinha"><Store /></Screen>}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-bag" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Store}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={32} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
