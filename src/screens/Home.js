import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WallCategory from '../screens/WallCategory';
import SaveWall from '../screens/SaveWall';
import {COLORS} from '../Theme';

const Tab = createBottomTabNavigator();

const Home = ({params}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.categorycolor,
        inactiveTintColor: '#000000',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={WallCategory}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/home.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SaveWall}
        options={{
          tabBarLabel: 'Saved Wall',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/star.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
