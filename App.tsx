import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab.jsx';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;