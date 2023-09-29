import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const onPressOfSubmit = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User account created & signed in!');

            navigation.navigate('Sign');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });
      }
      Alert.alert('please verify the verification link');
      await auth().currentUser.sendEmailVerification();
      await auth().signOut();
    } catch (error) {}
  };

  const onPressAlready = () => {
    navigation.navigate('Sign');
  };
  return (
    <SafeAreaView>
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
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressAlready()}
        style={{
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          width: '90%',
          marginVertical: 10,
          marginRight: 'auto',
          marginLeft: 'auto',
          borderRadius: 8,
        }}>
        <Text>Already have an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
