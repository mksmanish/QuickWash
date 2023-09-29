import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';

const Splash = () => {
  const [isUserLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate(isUserLogin ? 'Activity' : 'Sign');
      auth().onAuthStateChanged(user => {
        const routeName = user != null ? 'Activity' : 'Sign';
        // navigation.navigate(routeName);
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
    return () => {
      console.log('clean up called');
    };
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
