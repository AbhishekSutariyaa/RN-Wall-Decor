import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';
import CategoryDetails from './src/screens/CategoryDetails';
import WallDetails from './src/screens/WallDetails';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/Store';

const Stack = createStackNavigator();

const App = ({params}) => {
  console.disableYellowBox = true;
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator initialRouteName={'Splash'}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CategoryDetails"
              component={CategoryDetails}
              options={{headerTitle: 'Wall Category'}}
            />
            <Stack.Screen
              name="WallDetails"
              component={WallDetails}
              options={{headerTitle: 'Wall Design'}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
