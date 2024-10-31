import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelStyle: { fontSize: 10 },
        headerShown: false,
      }}>
      <Tabs.Screen
  name="index"
  options={{
    title: 'client',  
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name={focused ? 'man' : 'man-outline'} color={color} />
    ),
  }}
/>

      <Tabs.Screen
        name="Coiffeur"
        options={{
          title: 'Coiffeur',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cut' : 'cut-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
