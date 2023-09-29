import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {location, search} from '../assets';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

const HomeSceen = () => {
  const [locate, setLocate] = useState('');
  const [list, setList] = useState('');
  const [isupdate, setIsUpdate] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    getdata();
  }, []);

  // const datafro = async () => {
  //   try {
  //     const usersCollection = await firestore()
  //       .collection('testing')
  //       .doc('OWZQZY7sHESK8LB7rlGI')
  //       .get();
  //     console.log(usersCollection._data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getdata = async () => {
    try {
      // for single use
      // const data = await database().ref('todo').once('value');
      // console.log(data);
      // setList(data.val());
      const data = await database()
        .ref('todo')
        .on('value', tempData => {
          setList(tempData.val());
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onPressOfSubmit = () => {
    navigation.navigate('Login');
    // try {
    //   const index = list.length;
    //   const response = await database().ref(`todo/${index}`).set({
    //     value: locate,
    //   });
    //   setLocate('');
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onPressOfUpdate = async () => {
    try {
      const response = await database().ref(`todo/${selectedIndex}`).update({
        value: locate,
      });
      setLocate('');
      console.log(response);
      setIsUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (index, value) => {
    try {
      console.log(index);
      setSelectedIndex(index);
      setLocate(value);
      setIsUpdate(true);
    } catch (error) {}
  };

  const onPressCardItem = async index => {
    console.log(index);
    Alert.alert('delete', 'You want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          try {
            const response = await database().ref(`todo/${index}`).remove();
            setLocate('');
            setIsUpdate(false);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: 10}}>
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
            placeholder="Enter Text"
            placeholderTextColor={'gray'}
            value={locate}
            onChangeText={text => setLocate(text)}
            style={{marginLeft: 10}}></TextInput>
        </View>
        {!isupdate ? (
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
            <Text>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onPressOfUpdate()}
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
            <Text>Update</Text>
          </TouchableOpacity>
        )}

        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => handleCardPress(index, item?.value)}
              onLongPress={() => onPressCardItem(index, item?.value)}>
              <Text>{item?.value}</Text>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default HomeSceen;

const styles = StyleSheet.create({});
