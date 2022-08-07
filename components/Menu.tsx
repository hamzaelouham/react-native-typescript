import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../Navigation';

export default function Menu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

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
