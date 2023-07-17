import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/Stacks';

import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
