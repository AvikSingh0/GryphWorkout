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
import Icon from 'react-native-vector-icons/FontAwesome';
import ExercisePlanItem from '../components/ExercisePlanItem.jsx';
import { useSelector, useDispatch } from 'react-redux';

const navStyles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10
  },
  navRow: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 10,
    flexWrap: 'wrap'
  },
});

const Favourites = () => {
  return (
    <View>
      <Text>Workouts</Text>
    </View>
  );
}

export default Favourites;