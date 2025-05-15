import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackPropsList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
}

export type HomeNavigationProps = NativeStackNavigationProp<RootStackPropsList>;
