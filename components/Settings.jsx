
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


const navStyles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10
  }
});

const Settings = ({navigation}) =>  {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export default Settings;