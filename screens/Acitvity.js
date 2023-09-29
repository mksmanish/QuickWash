import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Acitvity = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const onPressLogut = async () => {
    const res = await auth().signOut();
    console.log(res);
    navigation.replace('Sign');
  };

  return (
    <View>
      <Text>{auth().currentUser?.email}</Text>
      <Text>{auth().currentUser?.uid}</Text>

      <TouchableOpacity
        onPress={() => onPressLogut()}
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
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Acitvity;

const styles = StyleSheet.create({});
