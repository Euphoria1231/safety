import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';

export type RootStackPropsList = {
  MainTabs: undefined;
  Register: undefined;
  Login: undefined;
  BrainLogin: undefined;
  Article: {
    articleId: string;
    title?: string;
    content?: string;
    author?: {
      name: string;
      avatar: string;
    };
    coverImage?: string;
    date?: string;
  };
}

export type TabPropsList = {
  Home: undefined;
  User: undefined;
  Edit: undefined;
  Search: undefined;
}

// 组合导航类型，同时支持底部标签导航和堆栈导航
export type HomeNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabPropsList, 'Home'>,
  NativeStackNavigationProp<RootStackPropsList>
>;
