import React from 'react';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WhiteRice from './screen/WhiteRice'
import ScreenHome from './screen/HomeScreen'
import YellowRice from './screen/YellowRice'
import ProfileCustomer from './screen/ProfileCustomer'
import GoodFood from './screen/GoodFood'

const Stack = createStackNavigator({
   
    Home: ScreenHome,
    WhiteRice: WhiteRice,
    YellowRice : YellowRice
  },
  {
    initialRouteName: 'Home'
  }
  );
  Stack.navigationOptions ={
    tarBarLabel: 'Home'
  }
const AppNavigator = createBottomTabNavigator({
  Stack,
  ProfileCustomer,
  GoodFood,
},
{
  initialRouteName: 'Stack'
})

  export default createAppContainer(AppNavigator);
