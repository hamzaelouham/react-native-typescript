import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type StackParams = {
  home: any;
  login: any;
  explore: any;
};

const Stack = createNativeStackNavigator<StackParams>();

export default Stack;
