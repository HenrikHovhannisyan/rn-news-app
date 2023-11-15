import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPostScreen } from './FullPost';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'News' }} />
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: 'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// npm i @react-navigation/native
// npm i @react-navigation/native-stack
// npm i react-native-screens
// npm i react-native-safe-area-context
// npm i react-native-gesture-handler
