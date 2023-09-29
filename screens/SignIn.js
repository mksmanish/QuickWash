import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const onPressOfSubmit = async () => {
    if (email.length > 0 && password.length > 0) {
      try {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(isUserLogin);
        // navigation.navigate('Activity', {
        //   email: isUserLogin?.user?.email,
        //   userID: isUserLogin?.user?.uid,
        // });
        navigation.dispatch(StackActions.replace('Activity'));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onPressNew = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 30,
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 45,
            width: '95%',
            alignSelf: 'center',
            margin: 10,
          }}>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={text => setEmail(text)}
            style={{marginLeft: 10}}></TextInput>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 30,
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 45,
            width: '95%',
            alignSelf: 'center',
            margin: 10,
          }}>
          <TextInput
            placeholder="Enter passeword"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{marginLeft: 10}}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => onPressOfSubmit()}
          style={{
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            width: '90%',
            marginVertical: 10,
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 8,
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressNew()}
          style={{
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            width: '90%',
            marginVertical: 10,
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 8,
          }}>
          <Text>New User Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
