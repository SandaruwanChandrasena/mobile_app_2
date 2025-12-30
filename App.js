/**
 * ScreenMind - Research App
 * Main Entry Point
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Login Screen
import LoginScreen from './src/features/auth/LoginScreen';

// --- DUMMY SCREENS (These act as placeholders for your team's work) ---

// 1. Pomodya's Component
const UsageScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>📱 Screen Usage</Text>
    <Text style={styles.subtitle}>Analyzing Logs & Addiction Risk</Text>
    <View style={styles.placeholderBox}>
      <Text>Graph Goes Here</Text>
    </View>
  </View>
);

// 2. Kulathunga's Component
const SleepScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>😴 Sleep Pattern</Text>
    <Text style={styles.subtitle}>Light Sensor & Accelerometer Data</Text>
    <View style={styles.placeholderBox}>
      <Text>Sleep Score: 85</Text>
    </View>
  </View>
);

// 3. Chandrasena's Component
const SocialScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>💬 Social Interaction</Text>
    <Text style={styles.subtitle}>Sentiment Analysis (NLP)</Text>
    <View style={styles.placeholderBox}>
      <Text>Mood: Positive</Text>
    </View>
  </View>
);

// 4. The Isolation Component
const IsolationScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>📍 Mobility & Isolation</Text>
    <Text style={styles.subtitle}>GPS & Movement Entropy</Text>
    <View style={styles.placeholderBox}>
      <Text>Movement: High</Text>
    </View>
  </View>
);

// --- NAVIGATION SETUP ---
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home Stack (Tab Navigation)
const HomeStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#6200EE' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Usage"
        component={UsageScreen}
        options={{ title: 'Usage' }}
      />
      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
        options={{ title: 'Sleep' }}
      />
      <Tab.Screen
        name="Social"
        component={SocialScreen}
        options={{ title: 'Social' }}
      />
      <Tab.Screen
        name="Isolation"
        component={IsolationScreen}
        options={{ title: 'Mobility' }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// --- GLOBAL STYLES ---
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  placeholderBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#CCC',
    borderStyle: 'dashed',
  },
});

export default App;
