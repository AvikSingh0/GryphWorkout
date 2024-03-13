import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../components/Home.jsx';
import Settings from '../components/Settings.jsx';
import AllWorkouts from '../components/AllWorkouts.jsx';

const Tab = createBottomTabNavigator();
const color = 'grey';
const size = 12;

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Plan"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { backgroundColor: 'rgba(250, 204, 49, 1)', height: 60 },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Plan"
        component={Home}
        options={{
          tabBarLabel: 'Plan',
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={AllWorkouts}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }) => (
            <Icon name="anchor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;