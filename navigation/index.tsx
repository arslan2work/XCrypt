/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { Image } from "react-native";

import { AntDesign, SimpleLineIcons, MaterialIcons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RankingScreen from '../screens/RankingScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


const home = require('../assets/images/home.png');
const profile = require('../assets/images/profile.png');
const ranking = require('../assets/images/ranking.png');
const linegraph = require('../assets/images/line-graph.png');
const portfolio = require('../assets/images/portfolios.png');

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root"  component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: '#eeecfc',
          borderTopColor: '#eeecfc',
        }
      }}
      >

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color="#302797" />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          headerShown: false,
          tabBarIcon: ({ color }) => <SimpleLineIcons name="bag" size={30} color="#302797" />,
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: 'Market',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign  name="barschart" size={30} color="#302797" />,
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          title: 'Ranking',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons  name="leaderboard" size={30}  color="#302797" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={30} color="#302797"/>,
        }}
      />
    </BottomTab.Navigator>
  );
}


