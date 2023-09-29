import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeSceen from '../screens/HomeSceen';
import Login from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Acitvity from '../screens/Acitvity';
import auth from '@react-native-firebase/auth';
import Splash from '../screens/Splash';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const [isUserLogin, setUserLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Activity"
          component={Acitvity}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={HomeSceen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
