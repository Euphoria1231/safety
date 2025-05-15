import { Text, View } from 'react-native';
import style from './index.css';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  return (
    <View style={style.container}>
      <Text style={style.h1}>Home</Text>
      <Button
        onPressIn={() => navigation.navigate('Register')}
      >Go to Register</Button>
      <Button
        onPressIn={() => navigation.navigate('Login')}
      >Go to Login</Button>
      <Button
        onPressIn={() => navigation.navigate('BrainLogin')}
      >Go to BrainLogin</Button>
    </View>
  );
};

export default Home;
