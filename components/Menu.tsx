import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Menu</Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('explore')}>
        <Text>explore</Text>
      </TouchableOpacity>
    </View>
  );
}
