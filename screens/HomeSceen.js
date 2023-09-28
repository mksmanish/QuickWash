import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {location, search} from '../assets';
import firestore from '@react-native-firebase/firestore';

const HomeSceen = () => {
  useEffect(() => {
    datafro();
  }, []);

  const datafro = async () => {
    try {
      const usersCollection = await firestore()
        .collection('testing')
        .doc('OWZQZY7sHESK8LB7rlGI')
        .get();
      console.log(usersCollection._data);
    } catch (error) {
      console.log(error);
    }
  };

  const [locate, setLocate] = useState('');
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
        }}>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Image style={{height: 25, width: 25}} source={location}></Image>
          <Text style={{fontWeight: '500', fontSize: 16, textAlign: 'center'}}>
            B,B6 Drigpal Vihar,Prayagraj ,211016
          </Text>
        </View>
        <Pressable>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'black',
            }}
            source={location}></Image>
        </Pressable>
      </View>
      <View>
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
          }}>
          <TextInput
            placeholder="Search Location"
            placeholderTextColor={'gray'}
            onChangeText={text => setLocate(text)}
            style={{marginLeft: 10}}></TextInput>

          <Image
            source={search}
            style={{
              height: 25,
              width: 25,
              tintColor: 'red',
              alignSelf: 'center',
              marginRight: 10,
            }}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeSceen;

const styles = StyleSheet.create({});
