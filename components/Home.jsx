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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExercisePlanList from '../components/ExercisePlanList.jsx';
import WorkoutPlanList from '../components/WorkoutPlanList.jsx';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
  
    <Stack.Navigator
      initialRouteName="WorkoutPlanList"
      screenOptions={{
         headerShown: false
       }}
    >
      <Stack.Screen
        name="WorkoutPlanList"
        component={WorkoutPlanList}
      />
      <Stack.Screen
        name="ExercisePlanList"
        component={ExercisePlanList}
      />

    </Stack.Navigator>
    

  );
}

export default Home;
